const Joi = require("joi");

const registeredUserValidation = Joi.object({
    fullname: Joi.string().trim().required().min(1),
    username: Joi.string().pattern(/^[a-zA-Z0-9._-]+$/).min(1).max(20).trim().required(),
    email: Joi.string().email().required(),
    phone: Joi.string().pattern(/^[0-9]{10}$/).required(),
    password: Joi.string().min(8).required(),
    confirmPassword: Joi.any().valid(Joi.ref("password")).required().messages({
        "any.only": "Passwords don not match"
    })
}).required();

const loggedInUserValidation = Joi.object({
    username: Joi.string().min(1).required(),
    password: Joi.string().min(6).required()
}).required();

const rideValidation = Joi.object({
    from: Joi.string().min(1).required(),
    to: Joi.string().min(1).required(),
    date: Joi.date().required(),
    time: Joi.string().pattern(/^([01]\d|2[0-3]):([0-5]\d)$/).required(),
    vehicle: Joi.string().min(1).required(),
    total: Joi.number().required(),
    available: Joi.number().required(),
    notes: Joi.string()
}).required();

module.exports = {
    registeredUserValidation,
    loggedInUserValidation,
    rideValidation
}