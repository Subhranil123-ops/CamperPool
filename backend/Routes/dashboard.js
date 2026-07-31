const express = require("express");
const router = express.Router()
const User = require('../models/userSchema.js');

const dashboardController = require("../Controller/dashboard.js");
const { isLoggedIn, rideValidate, isOwnerRide } = require("../middlewares.js");

router
    .route("/dashboard")
    .get(isLoggedIn,
        dashboardController.renderDashboard)

router.route("/createRide")
    .get(isLoggedIn, dashboardController.renderCreaterideForm)
    .post(isLoggedIn,
        rideValidate,
        dashboardController.postRideForm);

router.route("/rides")
    .get(dashboardController.renderAvailableRides);

router
    .route("/rides/:id/edit")
    .get(isLoggedIn,
        dashboardController.renderEditForm)

router
    .route("/rides/:id")
    .get(dashboardController.showRide)
    .patch(isLoggedIn,
        isOwnerRide,
        rideValidate,
        dashboardController.editRide)
    .delete(isLoggedIn,
        isOwnerRide,
        dashboardController.deleteRide);

router
    .route("/rides/:id/join")
    .get(isLoggedIn,
        dashboardController.joinRide);

router
    .route("/rides/:id/leave")
    .post(isLoggedIn,
        dashboardController.leaveRide);

router
    .route("/rides/:id/cancel")
    .post(isLoggedIn,
        isOwnerRide,
        dashboardController.cancelRide);


module.exports = router;