const wrapAsync = require("../utils/wrapAsync");
const User = require("../models/userSchema.js");

module.exports.renderRegisterForm = (req, res) => {
    res.render('./auth/register.ejs', {
        title: "Register"
    })
}

module.exports.Register = wrapAsync(async (req, res) => {
    const { username, password, hostel } = req.body;
    let newUser = new User({ username, hostel });
    try {
        await User.register(newUser, password);
    } catch (err) {
        req.flash("error", err.message);
        return res.redirect("/auth/register");
    }
    req.flash("success", "Account created successfully! Please log in.");
    res.redirect("/auth/login");
})

module.exports.renderLoginForm = (req, res) => {
    res.render("./auth/login.ejs", {
        title: "Login"
    });
}

module.exports.Login = (req, res) => {
    const redirect = res.locals.redirect || '/rides';
    req.flash("success", "You are successfully logged in !!");
    res.redirect(redirect);
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