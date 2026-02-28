const mongoose = require('mongoose');
const rideSchema = new mongoose.Schema({
    driver: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    available: {
        type: Number,
    },
    total: {
        type: Number,
    },
    vehicle: {
        type: String,
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
        required: true
    },
    to: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: "active"
    },
    passengers:
        [{ type: mongoose.Schema.Types.ObjectId,
            ref:"User"
         }]
},
    { timestamps: true });

const Ride = new mongoose.model('Ride', rideSchema);
module.exports = Ride;