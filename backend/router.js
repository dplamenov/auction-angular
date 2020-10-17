const express = require('express');
const router = express.Router();
const auth = require('./middleware/auth');
const isOwner = require('./middleware/product-is-owner');
const controllers = require('./controllers');

router.get('/', (req, res) => {
  res.send('welcome to api server');
});

router.post('/user/login', controllers.user.login);
router.post('/user/register', controllers.user.register);
router.get('/user/logout', auth, controllers.user.logout);

router.get('/product/latest', controllers.product.latest);
router.post('/product', auth, controllers.product.createProduct);
router.delete('/product/:id', auth, isOwner(), controllers.product.deleteProduct);
router.patch('/product/:id', auth, isOwner(), controllers.product.editProduct);

module.exports = router;