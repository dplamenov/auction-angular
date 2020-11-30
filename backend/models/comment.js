const mongoose = require('mongoose');

const CommentSchema = mongoose.Schema({
  body: {
    type: String,
    required: true
  },
  createTime: {
    type: String,
    default: Date.now
  },
  creator: {
    type: mongoose.Types.ObjectId,
    ref: 'User'
  }
});

module.exports = mongoose.model('Comment', CommentSchema);
