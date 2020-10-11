const jwt = require('jsonwebtoken');
const User = require('./models/user');
const {authCookie} = require('./config');

const secret = 'b7d4503acc8d249049e66d4f8936ac5e';
const options = {expiresIn: '2d'};

function generateAuthToken(userId) {
    return jwt.sign({login: true, userId}, secret, options);
}

function getTokenFromReq(req) {
    if (!req.cookies[authCookie]) {
        return false;
    }

    try {
        return jwt.verify(req.cookies[authCookie], secret);
    } catch (e) {
        return false;
    }
}

function getUserId(req) {
    return (getTokenFromReq(req) || {}).userId;
}

function auth(req, res, next) {
    const {login: isLogin, userId} = getTokenFromReq(req);

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


module.exports = {generateAuthToken, auth, getUserId};