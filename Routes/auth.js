const express = require("express");
const router = express.Router()
const User = require('../models/userSchema.js');
const passport = require("passport");
const authController = require("../Controller/auth.js");
const { registeredUserValidate, loggedInUserValidate, isLoggedIn } = require("../middlewares.js");

router
    .route("/register")
    .get(authController.renderRegisterForm)
    .post(registeredUserValidate,
        authController.Register
    );

router
    .route("/login")
    .get(authController.renderLoginForm)
    .post(loggedInUserValidate,
        passport.authenticate("local", { failureRedirect: "/auth/login", failureFlash: true }),
        authController.Login
    );

router.route("/logout")
    .get(isLoggedIn, authController.Logout)

module.exports = router;