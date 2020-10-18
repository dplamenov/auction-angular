const User = require('../models/user');
const Product = require('../models/product');

const ObjectId = require('mongoose').Types.ObjectId;

function isOwner(req, res, next) {
  const {id} = req.params;

  if (!ObjectId.isValid(id)) {
    return next('no that product');
  }

  Product.findById(id)
    .then(product => {
      if (!product) {
        return next('no that product');
      }
      if (product.creator.toString() !== req.user._id.toString()) {
        return next('user is not owner of product');
      }
      req.productId = id;
      return next();
    })
    .catch(next);
}


module.exports = isOwner;
