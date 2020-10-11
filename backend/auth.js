const jwt = require('jsonwebtoken');
const User = require('./models/user');

const secret = 'b7d4503acc8d249049e66d4f8936ac5e';
const options = { expiresIn: '2d' };

function getAuthToken(userId) {
    return jwt.sign({ login: true, userId }, secret, options);
}

function isLogin(req) {
    if (!req.cookies['auth-cookie']) {
        return false;
    }

    try {
        const token = jwt.verify(req.cookies['auth-cookie'], secret);
        return !!token.login;
    } catch (e) {
        return false;
    }
}

function auth(req, res, next){

}


module.exports = { getAuthToken, isLogin };