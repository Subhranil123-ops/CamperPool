const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose').default;
const userSchema = new mongoose.Schema({
    hostel: {
        type: String
    }
});
userSchema.plugin(passportLocalMongoose);
const User = new mongoose.model('User', userSchema);
module.exports = User;
