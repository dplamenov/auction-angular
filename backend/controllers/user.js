const User = require('../models/user');
const auth = require('../auth');

function login(req, res, next) {
    const { email, password } = req.body;

    User.findOne({ email, password }).select('-password').then(user => {
        if (!user) {
            return Promise.reject('no user');
        }
        res.cookie('auth-cookie', auth.getAuthToken());
        res.send(user);
    }).catch(next);
}

function register(req, res, next) {
    const { email, password } = req.body;

    User.create({ email, password })
        .then(res.send.bind(res))
        .catch(next);
}

module.exports = { login, register };