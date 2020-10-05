const mongoose = require('mongoose');
const {pattern: emailPattern} = require('./validate/userEmail');

const User = mongoose.model('User', {
    email: {
        type: String,
        validate: {
            validator: (v) => {
                return emailPattern.test(v);
            },
            message: prop => `email is not valid`
         }
    },
    password: String
});


module.exports = User;