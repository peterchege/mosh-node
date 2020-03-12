const mongoose = require('mongoose');
const Joi = require('joi');


const rentalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255
    },
    amount: {
        type: Number,
        required: true,
        min: 1,
        max: 255
    }
});

const Rentals = mongoose.model('rentalSchema', rentalSchema);

function ValidateRentals(rental){
    const schema = {
        name: Joi.string().min(5).max(255).required()
    };
    return Joi.validate(schema,rental)
}


exports.Rentals = Rentals;
exports.validate = ValidateRentals;