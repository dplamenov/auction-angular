function auth(req, res, next) {
  if(!req.user){ return next('no user');}
  next();
}

module.exports = auth;