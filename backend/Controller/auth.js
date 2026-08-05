const wrapAsync = require("../utils/wrapAsync");
const User = require("../models/userSchema.js");

module.exports.Register = wrapAsync(async (req, res) => {

    const { fullname, username, email, phone, password } = req.body;
    let newUser = new User({ fullname, username, email, phone });
    try {
        await User.register(newUser, password);
        return res.status(201).json({
            success: true,
            message: "Account created successfully! Please log in."
        })
    } catch (err) {
        return res.status(400).json({
            success: false,
            message: err.message
        })
    }
})

module.exports.Login = (req, res) => {
    const redirect = res.locals.redirect || '/rides';
    return res.status(201).json({
        success: true,
        message: "You are successfully logged in !!",
        redirect
    })
}

module.exports.Logout = (req, res, next) => {
    req.logout(err => {
        if (err) return next(err);
        else {
            req.flash("success", "You are successfully logged Out from your account!");
            return res.redirect('/rides');
        }
    })
}
