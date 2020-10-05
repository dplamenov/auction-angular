const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    creator: {
        type: mongoose.Types.ObjectId, ref: 'User'
    },
    imageName: {
        type: String
    }
});

module.exports = mongoose.model('Product', ProductSchema);