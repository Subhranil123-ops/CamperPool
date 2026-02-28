const { registeredUserValidation, loggedInUserValidation, rideValidation } = require("./schema.js");
const ExpressError = require("./utils/ExpressError.js");
const Ride = require("./models/rideSchema.js");

module.exports.registeredUserValidate = (req, res, next) => {
    let result = registeredUserValidation.validate(req.body);
    if (result.error) {
        throw new ExpressError(400, result.error.details[0].message);
    }
    next();
}

module.exports.loggedInUserValidate = (req, res, next) => {
    let result = loggedInUserValidation.validate(req.body);
    if (result.error) {
        throw new ExpressError(400, result.error.details[0].message);
    }
    next();
}

module.exports.rideValidate = (req, res, next) => {
    let result = rideValidation.validate(req.body);
    if (result.error) {
        throw new ExpressError(400, result.error.details[0].message);
    }
    next();
}

module.exports.isLoggedIn = ((req, res, next) => {
    if (!req.isAuthenticated()) {
        req.flash("error", "You are not logged in!");
        return res.redirect("/auth/login");
    }
    next();
});

module.exports.isOwnerRide = (async (req, res, next) => {
    let { id } = req.params;
    let ride = await Ride.findById(id);
    if (!ride) throw new ExpressError(400, "Ride not exists!");
    if (req.user._id.equals(ride.driver)) {
        return next();
    } else {
        req.flash("error", "You are not the rider of this ride.");
        return res.redirect(`/rides/${id}`);
    }
})