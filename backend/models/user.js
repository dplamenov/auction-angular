const mongoose = require('mongoose');
const {pattern: emailPattern} = require('./validate/userEmail');

const UserSchema = mongoose.Schema({
    email: {
        type: String,
        validate: {
            validator: (v) => {
                return emailPattern.test(v);
            },
            message: _ => `email is not valid`
        }
    },
    password: {
        type: String,
        validate: {
            validator: (v) => {
                return v.length >= 8;
            }
        }
    }
});

module.exports = mongoose.model('User', UserSchema);