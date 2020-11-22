const fs = require('fs');
const path = require('path');
const formidable = require('formidable');
const Product = require('../models/product');
const Bid = require('../models/bid');
const {getUserId} = require('../auth');
const {latestProductCount} = require('../config');

function createProduct(req, res, next) {
  const form = formidable({multiples: true});

  form.parse(req, (err, fields, files) => {
    if (err) {
      return next(err.message);
    }

    const {image} = files;

    const product = {
      title: fields.title,
      description: fields.description,
      endTime: fields.endTime,
      startPrice: fields.startPrice,
      creator: getUserId(req)
    };

    Product.create(product)
      .then(product => {
        const newPath = path.resolve('public/images', `${product._id.toString()}.png`);
        fs.rename(image.path, newPath, (err) => {
          if (err) {
            return next(err.message);
          }
        });
        res.json(product);
      })
      .catch(next);
  });

}

function deleteProduct(req, res, next) {
  const id = req.productId;

  Product.findByIdAndDelete(id)
    .then(res.json.bind(res))
    .catch(next);
}

function editProduct(req, res, next) {
  const id = req.productId;

  const form = formidable({multiples: true});

  form.parse(req, (err, fields, files) => {
    if (err) {
      return next(err.message);
    }

    const {title = '', description = ''} = fields;

    Product.findByIdAndUpdate(id, {$set: {title, description}})
      .then(product => {
        res.json(Object.assign({}, product.toObject(), {title, description}));
      })
      .catch(next);
  });
}

function latest(req, res, next) {
  Product.find().sort({createTime: -1}).limit(latestProductCount)
    .then(res.json.bind(res))
    .catch(next);
}

function allProducts(req, res, next) {
  const {skip, take} = req.query;

  Product.find({}).sort({createTime: -1}).skip(Number(skip)).limit(Number(take))
    .then(res.json.bind(res))
    .catch(next);
}

function details(req, res, next) {
  const product = req.product.toObject();

  const isOwner = product.creator._id.toString() === getUserId(req);

  product.isOwner = isOwner;
  product.bids = [];

  Bid.find({product: product._id.toString()})
    .sort({priceValue: -1})
    .populate('creator', ['-password', '-__v'])
    .then(bids => {
      product.priceValue = (bids[0] || {}).priceValue;
      if (isOwner) {
        product.bids = bids;
      }
      res.json(product);
    })
    .catch(next);
}

function addBid(req, res, next) {
  const productId = req.productId;

  Bid.create({
    priceValue: Number(req.body.priceValue),
    creator: getUserId(req),
    product: productId
  })
    .then(bid => {
      res.json(bid);
    })
    .catch(next);
}

function getProductsCount(req, res, next) {
  Product.count({}).then(count => {
    res.json({count});
  });
}

module.exports = {
  createProduct,
  deleteProduct,
  editProduct,
  latest,
  allProducts,
  details,
  addBid,
  getProductsCount
};
