const mongoose = require('mongoose');

const userschema = mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: [6, 'Password must be at least 6 characters long']
    }
});

const user = mongoose.model('user',userschema);
module.exports = user;