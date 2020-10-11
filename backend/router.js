const express = require('express');
const router = express.Router();
const {auth} = require('./auth');
const controllers = require('./controllers');

router.post('/user/login', controllers.user.login);
router.post('/user/register', controllers.user.register);
router.post('/product/create', auth, controllers.product.createProduct);

module.exports = router;