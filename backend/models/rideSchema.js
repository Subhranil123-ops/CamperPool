const mongoose = require('mongoose');
const rideSchema = new mongoose.Schema({
    driver: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    available: {
        type: Number,
        required: true,
        min: 0
    },
    total: {
        type: Number,
        required: true,
        min: 1
    },
    vehicle: {
        type: String,
        enum: ["Bike", "Scooty", "Car", "Bicycle", "Auto", "Other"],
        required: true,
    },
    date: {
        type: Date,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    from: {
        type: String,
        required: true,
        trim: true
    },
    to: {
        type: String,
        required: true,
        trim: true
    },
    status: {
        type: String,
        enum: ["active", "cancelled", "full"],
        default: "active",
        required: true
    },
    passengers: {
        type: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }],
        default: []
    },
    notes: {
        type: String,
        trim: true,
        maxlength: 200,
        default: ""
    }
},
    { timestamps: true });

const Ride = new mongoose.model('Ride', rideSchema);
module.exports = Ride;