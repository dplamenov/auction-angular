const mongoose = require('mongoose');

module.exports = function () {
    return mongoose.connect('mongodb://localhost:27017/auction-angular', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
};
