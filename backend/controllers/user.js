const User = require('../models/user');
const auth = require('../auth');

function login(req, res) {
    const { email, password } = req.body;

    User.findOne({ email, password }).select('-password').then(user => {
        if (!user) {
            return Promise.reject('no user');
        }
        res.cookie('auth-cookie', auth.getAuthToken());

        res.send(user);
    }).catch(err => {
        res.end();
    });
}

function register(req, res) {
    const { email, password } = req.body;

    User.create({ email, password })
        .then(res.send.bind(res))
        .catch(err => {
            res.status(400);
            const errorData = Object.values(err.errors).map(e => e.message);
            res.send({
                errors: errorData
            });
        });
}


module.exports = { login, register };