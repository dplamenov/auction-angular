const express = require('express');
const router = express.Router();
const auth = require('./middleware/auth');
const controllers = require('./controllers');

router.get('/', (req, res) => {
   res.send('welcome to api server');
});

router.post('/user/login', controllers.user.login);
router.post('/user/register', controllers.user.register);
router.get('/user/logout', auth, controllers.user.logout);
router.post('/product/create', auth, controllers.product.createProduct);

module.exports = router;