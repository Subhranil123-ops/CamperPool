const Joi = require("joi");

const registeredUserValidation = Joi.object({
    username: Joi.string().min(1).required(),
    hostel: Joi.string().min(1).required(),
    password: Joi.string().min(6).required()
}).required();

const loggedInUserValidation = Joi.object({
    username: Joi.string().min(1).required(),
    password: Joi.string().min(6).required()
}).required();

const rideValidation = Joi.object({
    ride: Joi.object({
        from: Joi.string().min(1).required(),
        to: Joi.string().min(1).required(),
        date: Joi.date().required(),
        time: Joi.string().pattern(/^([01]\d|2[0-3]):([0-5]\d)$/).required(),
        vehicle: Joi.string().min(1).required(),
        total: Joi.number().required(),
        available: Joi.number().required(),
    })
}).required();

module.exports = {
    registeredUserValidation,
    loggedInUserValidation,
    rideValidation
}