const User = require('../models/user');
const TokenBlacklist = require('../models/tokenBlacklist');
const auth = require('../auth');
const {authCookie} = require('../config');

function login(req, res, next) {
    const {email, password} = req.body;

    User.findOne({email})
        .then(user => !!user ? Promise.all([user, user.matchPassword(password)]) : [null, false])
        .then(([user, match]) => {
            if (!match) {
                return Promise.reject('invalid username or password');
            }
            res.cookie('auth-cookie', auth.generateAuthToken(user._id));
            res.json({_id: user._id, email: user.email});
        })
        .catch(next);
}

function register(req, res, next) {
    const {email, password} = req.body;

    User.create({email, password})
        .then(user => {
            res.json({_id: user._id, email: user.email});
        })
        .catch(next);
}

function logout(req, res, next) {
    const token = req.cookies[authCookie];
    TokenBlacklist.create({token}).then(_ => {
        res.clearCookie('auth-cookie')
            .json({logout: true});
    }).catch(next);
}

module.exports = {login, register, logout};