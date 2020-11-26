const User = require('../models/user');
const TokenBlacklist = require('../models/tokenBlacklist');
const auth = require('../auth');
const {authCookie} = require('../config');
const Product = require('../models/product');
const Bid = require('../models/bid');

function login(req, res, next) {
  const {email, password} = req.body;

  User.findOne({email})
    .then(user => !!user ? Promise.all([user, user.matchPassword(password)]) : [null, false])
    .then(([user, match]) => {
      if (!match) {
        return Promise.reject('invalid username or password');
      }
      res.cookie('auth-cookie', auth.generateAuthToken(user._id));
      res.json({_id: user._id, email: user.email});
    })
    .catch(next);
}

function register(req, res, next) {
  const {email, password} = req.body;

  User.create({email, password})
    .then(user => {
      res.json({_id: user._id, email: user.email});
    })
    .catch((err) => {
      if (err.name === 'MongoError' && err.code === 11000) {
        return res.status(422).send({errors: ['User already exist']});
      }
      next();
    });
}

function logout(req, res, next) {
  const token = req.cookies[authCookie];
  TokenBlacklist.create({token}).then(_ => {
    res.clearCookie('auth-cookie')
      .json({logout: true});
  }).catch(next);
}

function profile(req, res, next) {
  const result = {
    user: {email: req.user.email, _id: req.user._id},
  }

  const creator = {creator: req.user._id};

  Promise.all([Bid.find(creator).populate('product'), Product.find(creator)])
    .then(async ([bids, products]) => {
      result.products = await Promise.all(products.map(async (product) => {
        const latestBid = await Bid.findOne({product: product.id}).sort({priceValue: -1});
        const priceValue = latestBid ? latestBid.priceValue : product.startPrice;
        return {...product._doc, priceValue};
      }));
      result.bids = bids;
      res.json(result);
    });

}

module.exports = {
  login,
  register,
  logout,
  profile
};
