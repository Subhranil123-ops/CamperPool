const Ride = require("../models/rideSchema");
const ExpressError = require("../utils/ExpressError");
const wrapAsync = require("../utils/wrapAsync");


module.exports.renderDashboard = wrapAsync(async (req, res) => {
    let rides = await Ride.find({ driver: req.user._id });
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const totalRidesCount = await Ride.countDocuments({ driver: req.user._id });
    const activeRidesCount = await Ride.countDocuments({
        driver: req.user._id,
        date: { $gte: today }
    });
    res.render("dashboard/dashboard", {
        title: "Dashboard",
        rides,
        totalRidesCount,
        activeRidesCount
    });
});

module.exports.renderCreaterideForm = (req, res) => {
    res.render("./dashboard/newRide.ejs", {
        title: "New Ride"
    })
};

module.exports.postRideForm = wrapAsync(async (req, res) => {
    let { time, date } = req.body.ride;
    const dateTime = new Date(date + "T" + time);
    let currentDateTime = new Date();
    if (dateTime < currentDateTime) {
        req.flash("error", "Ride Date and Time can't be in the past");
        return res.redirect("/createRide");
    } else {
        let newRide = new Ride(req.body.ride);
        newRide.driver = req.user._id;
        await newRide.save();
        req.flash("success", "New Ride added !!");
        res.redirect('/dashboard');
    }
});

module.exports.renderAvailableRides = wrapAsync(async (req, res) => {
    let filter = {};
    if (req.user) filter.driver = { $ne: req.user._id };
    if (req.query.from) filter.from = req.query.from;
    if (req.query.to) filter.to = req.query.to;
    if (req.query.vehicle) filter.vehicle = req.query.vehicle;
    if (req.query.status) filter.status = req.query.status;
    else {
        filter.status = "active";
    }
    let selectedDate = new Date(req.query?.date);
    let start = new Date(selectedDate);
    start.setHours(0, 0, 0, 0);
    let end = new Date(selectedDate);
    end.setHours(23, 59, 59, 999);
    if (req.query.date) filter.date = {
        $lte: end,
        $gte: start
    }
    let rides = await Ride.find(filter).populate('driver');
    let fromOptions = await Ride.distinct("from");
    let toOptions = await Ride.distinct("to");
    let vehicleOptions = await Ride.distinct("vehicle");
    let statusOptions = await Ride.distinct("status");
    res.render("./dashboard/rides.ejs", {
        title: "Rides",
        rides,
        fromOptions,
        toOptions,
        vehicleOptions,
        statusOptions,
        query: req.query
    });
});

module.exports.showRide = wrapAsync(async (req, res) => {
    let { id } = req.params;
    let ride = await Ride.findById(id)
        .populate('driver')
        .populate('passengers');
    console.log(ride);
    if (!ride) throw new ExpressError(400, "Ride not found");
    res.render("./dashboard/showRide.ejs", {
        title: "Ride",
        ride
    });
});

module.exports.joinRide = wrapAsync(async (req, res) => {
    let { id } = req.params;
    let ride = await Ride.findById(id);
    if (!ride) throw new ExpressError(400, "Ride not found");

    let match = ride.passengers.some(el => req.user._id.equals(el));
    if (match) {
        req.flash("error", "You are already joined");
        return res.redirect("/rides");
    }
    if (ride.available <= 0) {
        req.flash("error", "No available seats");
        return res.redirect("/rides");
    }
    if (req.user._id.equals(ride.driver)) {
        req.flash("error", "You cannot join your own ride.");
        return res.redirect("/rides");
    }
    ride.passengers.push(req.user._id);
    ride.available -= 1;
    if (ride.available === 0) ride.status = "full";
    let newRide = new Ride(ride);
    await newRide.save();
    req.flash("success", "You successfully joined the ride");
    res.redirect('/rides');
});

module.exports.renderEditForm = wrapAsync(async (req, res) => {
    let { id } = req.params;
    let ride = await Ride.findById(id);
    res.render("./dashboard/editRide.ejs", {
        title: "Edit Ride",
        ride
    });
});

module.exports.editRide = wrapAsync(async (req, res) => {
    let { id } = req.params;
    await Ride.findByIdAndUpdate(id, { ...req.body.ride });
    res.redirect(`/rides/${id}`)
});

module.exports.leaveRide = wrapAsync(async (req, res) => {
    let { id } = req.params;
    let ride = await Ride.findById(id);
    if (!ride) throw new ExpressError(400, "No such Ride exists");
    if (ride.passengers.includes(req.user._id)) {
        await Ride.findByIdAndUpdate(id, {
            $pull: { passengers: req.user._id },
            $inc: { available: 1 }
        });
        req.flash("success", "Left the ride successfully");
        return res.redirect(`/rides/${id}`);
    } else {
        req.flash("error", "You are not a passenger of this ride");
        return res.redirect(`/rides/${id}`);
    }
});

module.exports.cancelRide = wrapAsync(async (req, res) => {
    let { id } = req.params;
    let ride = await Ride.findByIdAndUpdate(id, {
        $set: { status: "cancelled" }
    });
    if (!ride) throw new ExpressError(400, "No such ride exists");
    if (ride.status === "cancelled") {
        req.flash("error", "Ride is already cancelled");
        return res.redirect(`/rides/${id}`);
    }
    req.flash("success", "Ride cancelled");
    res.redirect(`/rides/${id}`);
})

module.exports.deleteRide = wrapAsync(async (req, res) => {
    let { id } = req.params;
    let ride = await Ride.findById(id);
    if (!ride) throw new ExpressError(400, "No such Ride exists!!");
    await Ride.findByIdAndDelete(id);
    req.flash("success", "Ride Deleted Successfully");
    res.redirect("/dashboard");
})


