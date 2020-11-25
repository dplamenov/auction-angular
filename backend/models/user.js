const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const saltRounds = 10;

const {pattern: emailPattern} = require('./validate/userEmail');

const UserSchema = mongoose.Schema({
    email: {
        type: String,
        unique: true,
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

UserSchema.methods.matchPassword = function (password){
    return bcrypt.compare(password, this.password);
};

UserSchema.pre('save', function (next) {
    if (this.isModified('password')) {
        bcrypt.genSalt(saltRounds, (err, salt) => {
            if (err) {
                next(err);
                return;
            }
            bcrypt.hash(this.password, salt, (err, hash) => {
                if (err) {
                    next(err);
                    return;
                }
                this.password = hash;
                next();
            });
        });
        return;
    }
    next();
});

module.exports = mongoose.model('User', UserSchema);
