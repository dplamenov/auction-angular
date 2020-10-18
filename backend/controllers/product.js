const fs = require('fs');
const path = require('path');
const formidable = require('formidable');
const Product = require('../models/product');
const Bid = require('../models/bid');
const getFileExt = require('../utils/getFileExtensionFromMimeType');
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
        const extension = getFileExt(image.type);
        const newPath = path.resolve('public/images', `${product._id.toString()}.${extension}`);
        fs.rename(image.path, newPath, (err) => {
          if(err){
            next(err.message);
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

  const isOwner = product.creator.toString() === getUserId(req);
  console.log(isOwner);

  if(isOwner){
    Bid.find({product: product._id.toString()}).populate('creator', ['-password', '-__v']).then(bids => {
      product.bids = bids;
      res.json(product);
    });
    return;
  }

  res.json(product);
}

function addBid(req, res, next){

}


module.exports = {
  createProduct,
  deleteProduct,
  editProduct,
  latest,
  allProducts,
  details,
  addBid
};