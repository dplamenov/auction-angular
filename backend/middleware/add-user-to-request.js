const User = require('../models/user');
const {getTokenFromReq, isTokenValid} = require('../auth');
const {authCookie} = require('../config');

function addUserToRequest(req, res, next) {
  const {login: isLogin, userId} = getTokenFromReq(req);

  if (isLogin) {
    Promise.all([User.findById(userId), isTokenValid(req.cookies[authCookie])])
      .then(([user, tokenBlacklisted]) => {
        if (tokenBlacklisted && !user) {
          return next();
        }
        req.user = user;
        return next();
      })
      .catch(next);
  }
  next();
}

module.exports = addUserToRequest;