const jwt = require('jsonwebtoken');

const secret = 'secret';
const options = { expiresIn: '2d' };

function getAuthToken() {
    return jwt.sign({ login: true }, secret, options);
}

function isLogin(req) {
    if (!req.cookies.auth) {
        return false;
    }

    try {
        const token = jwt.verify(req.cookies.auth, secret);
        return !!token.login;
    } catch (e) {
        return false;
    }
}


module.exports = { getAuthToken, isLogin };