const jwt = require('jsonwebtoken');
const User = require('./models/user');

const secret = 'b7d4503acc8d249049e66d4f8936ac5e';
const options = {expiresIn: '2d'};

function getAuthToken(userId) {
    return jwt.sign({login: true, userId}, secret, options);
}

function getToken(req) {
    if (!req.cookies['auth-cookie']) {
        return false;
    }

    try {
        return jwt.verify(req.cookies['auth-cookie'], secret);
    } catch (e) {
        return false;
    }
}

function auth(req, res, next) {
    const {login: isLogin, userId} = getToken(req);

    if (isLogin) {
        User.findById(userId)
            .then(user => {
                req.user = user;
                return next();
            })
            .catch(next);

        return;
    }
    next('no user');
}


module.exports = {getAuthToken, auth};