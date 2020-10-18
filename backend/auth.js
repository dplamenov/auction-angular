const jwt = require('jsonwebtoken');
const TokenBlacklist = require('./models/tokenBlacklist');
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

function isLogin(req){
    return (getTokenFromReq(req) || {}).login;
}

function isTokenValid(token) {
    return new Promise(((resolve, reject) => {
        TokenBlacklist.findOne({token})
            .then(tokenData => {
                resolve(!!tokenData);
            })
            .catch(reject);
    }));
}

module.exports = {generateAuthToken, getTokenFromReq, getUserId, isTokenValid, isLogin};