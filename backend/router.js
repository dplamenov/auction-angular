const express = require('express');
const router = express.Router();

const controllers = require('./controllers');

router.post('/user/login', controllers.user.login);
router.post('/user/register', controllers.user.register);

module.exports = router;