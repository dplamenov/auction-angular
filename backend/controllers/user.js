const User = require('../models/user');
const auth = require('../auth');

function login(req, res, next) {
    const {email, password} = req.body;

    User.findOne({email})
        .then(user => !!user ? Promise.all([user, user.matchPassword(password)]) : [null, false])
        .then(([user, match]) => {
            if (!match) {
                return Promise.reject('invalid username or password');
            }
            res.cookie('auth-cookie', auth.getAuthToken(user._id));
            res.send({_id: user._id, email: user.email});
        })
        .catch(next);
}

function register(req, res, next) {
    const {email, password} = req.body;

    User.create({email, password})
        .then(user => {
            res.send({_id: user._id, email: user.email});
        })
        .catch(next);
}

function logout(req, res) {
    res.clearCookie('auth-cookie')
        .redirect('/');
}

module.exports = {login, register, logout};