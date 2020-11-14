const express = require('express');
const router = express.Router();
const controllers = require('./controllers');
const auth = require('./middleware/auth');
const isOwner = require('./middleware/product-is-owner');
const isNotOwner = require('./middleware/product-is-owner');
const getProductFromRequest = require('./middleware/get-product-from-request');
const addUserToRequest = require('./middleware/add-user-to-request');

router.use(addUserToRequest);

router.get('/', (req, res) => {
  res.send('welcome to api server');
});

router.get('/user/auth', (req, res) => {
  if (!req.user) {
    res.status(401);
    res.end();
    return;
  }
  res.json(req.user);
});


router.post('/user/login', controllers.user.login);
router.post('/user/register', controllers.user.register);
router.get('/user/logout', auth, controllers.user.logout);

router.get('/product', controllers.product.allProducts);
router.get('/product/count', controllers.product.getProductsCount);
router.get('/product/latest', controllers.product.latest);
router.get('/product/:id', getProductFromRequest, controllers.product.details)
router.post('/product', auth, controllers.product.createProduct);
router.delete('/product/:id', auth, getProductFromRequest, isOwner, controllers.product.deleteProduct);
router.patch('/product/:id', auth, getProductFromRequest, isOwner, controllers.product.editProduct);

router.post('/product/:id/bid',
  auth,
  getProductFromRequest,
  isNotOwner,
  controllers.product.addBid);

module.exports = router;
