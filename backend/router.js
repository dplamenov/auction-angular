const express = require('express');
const router = express.Router();
const controllers = require('./controllers');
const auth = require('./middleware/auth');
const isOwner = require('./middleware/product-is-owner');
const isNotOwner = require('./middleware/product-is-owner');
const getProductFromRequest = require('./middleware/get-product-from-request');
const addUserToRequest = require('./middleware/add-user-to-request');

// const Bid = require('./models/bid');

router.use(addUserToRequest);

router.get('/', (req, res) => {
  // Bid.create({
  //   priceValue: '1250',
  //   creator: '5f8309254cd133105880f9a2',
  //   product: '5f8c4d9ccf5bc3154c3668d4'
  // });
  res.send('welcome to api server');
});

router.post('/user/login', controllers.user.login);
router.post('/user/register', controllers.user.register);
router.get('/user/logout', auth, controllers.user.logout);

router.get('/product', controllers.product.allProducts);
router.get('/product/latest', controllers.product.latest);
router.get('/product/:id', getProductFromRequest, controllers.product.details)
router.post('/product', auth, controllers.product.createProduct);
router.delete('/product/:id', auth, getProductFromRequest, isOwner, controllers.product.deleteProduct);
router.patch('/product/:id', auth, getProductFromRequest, isOwner, controllers.product.editProduct);

// router.post('/product/:id/bid',
//   auth,
//   getProductFromRequest,
//   isNotOwner,
//   controllers.product.addBid);

module.exports = router;