function isOwner(req, res, next) {
  if(req.product.creator.toString() === req.user._id.toString()){
    return next();
  }
  next('user is not owner of product');
}

module.exports = isOwner;