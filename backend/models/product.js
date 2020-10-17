const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  creator: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
    required: true
  },
  imageName: {
    type: String,
    required: true
  },
  createTime: {
    type: String,
    default: Date.now
  }
});

module.exports = mongoose.model('Product', ProductSchema);