const Product = require('../models/product');

const ObjectId = require('mongoose').Types.ObjectId;

function getProductFromRequest(req, res, next) {
  const {id} = req.params;

  if (!ObjectId.isValid(id)) {
    return next('no that product');
  }

  Product.findById(id)
    .populate('creator', ['-password', '-__v'],)
    .populate({path: 'comments', populate: 'creator'})
    .then(product => {
      if (!product) {
        return next('no that product');
      }
      req.product = product;
      req.product.comments = product.comments.sort((a, b) => {
        return b.createTime - a.createTime;
      });

      req.productId = id;
      return next();
    })
    .catch(next);
}


module.exports = getProductFromRequest;
