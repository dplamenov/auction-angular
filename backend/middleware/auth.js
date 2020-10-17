const User = require('../models/user');
const {getTokenFromReq, isTokenValid} = require('../auth');

function auth(req, res, next) {
    const {login: isLogin, userId} = getTokenFromReq(req);

    if (isLogin) {
        Promise.all([User.findById(userId), isTokenValid(req.cookies[authCookie])])
            .then(([user, tokenBlacklisted]) => {
                if (tokenBlacklisted) {
                    return next('no user');
                }
                req.user = user;
                return next();
            })
            .catch(next);

        return;
    }
    next('no user');
}

module.exports = auth;