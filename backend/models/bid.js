const mongoose = require('mongoose');

const BidSchema = mongoose.Schema({
  priceValue: {
    type: Number,
    required: true
  },
  creator: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
    required: true
  },
  product: {
    type: mongoose.Types.ObjectId,
    ref: 'Product',
    required: true
  }
});

module.exports = mongoose.model('Bid', BidSchema);
