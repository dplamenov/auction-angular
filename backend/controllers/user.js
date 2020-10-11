const User = require('../models/user');
const auth = require('../auth');

function login(req, res, next) {
    const {email, password} = req.body;

    User.findOne({email, password}).then(user => {
        if (!user) {
            return Promise.reject('no user');
        }
        res.cookie('auth-cookie', auth.getAuthToken(user._id));
        res.send({_id: user._id, email: user.email});
    }).catch(next);
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