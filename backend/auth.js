const jwt = require('jsonwebtoken');

const secret = 'b7d4503acc8d249049e66d4f8936ac5e';
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