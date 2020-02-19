const Joi = require('Joi');
const mongoose = require('mongoose');

const Customer = mongoose.model('Cusomer', new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlenght: 5,
        maxlength: 50
    },
    isGold: {
        type: Boolean,
        default: false,
    },
    phone: {
        type: String,
        required: true,
        minlenght: 11
    }

}));

function validateCustomer(customer) {
    const schema = {
        name: Joi.string().min(5).max(50).required(),
        isGold: Joi.boolean(),
        phone: Joi.string().min(12).max(50).required()
    };
    return Joi.validate(customer, schema);
};

exports.Customer = Customer;
exports.validate = validateCustomer;

