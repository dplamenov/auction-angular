const User = require('../models/user');
const auth = require('../auth');


function login(req, res) {
    const { email, password } = req.body;

    User.findOne({ email, password }).then(user => {
        if (!user) {
            return Promise.reject('no user');
        }
        console.log(user);
        user._doc.authToken = auth.getAuthToken();
        res.send(user);
    }).catch(err => {
        console.log(err);
        res.end();
    });
}

function register(req, res) {
    console.log('register');
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