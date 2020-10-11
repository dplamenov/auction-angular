const mongoose = require('mongoose');

const TokenBlacklistSchema = mongoose.Schema({
    token: String
});

module.exports = mongoose.model('TokenBlacklist', TokenBlacklistSchema);