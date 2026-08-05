const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose').default;
const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
        trim: true
    },
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    phone: {
        type: String,
        required: true,
        unique: true,
        trim: true
    }

});
userSchema.plugin(passportLocalMongoose);
const User = new mongoose.model('User', userSchema);
module.exports = User;
