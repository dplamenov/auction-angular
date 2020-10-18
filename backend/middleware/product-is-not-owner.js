function isNotOwner(req, res, next) {
  if(req.product.creator.toString() !== req.user._id.toString()){
    return next();
  }
  next('user is owner of product');
}

module.exports = isNotOwner;