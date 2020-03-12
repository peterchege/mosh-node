const mongoose = require('mongoose');
const Joi = require('Joi');


const User = new mongoose.model('user', mongoose.Schema({
    name: {
        type: String,
        minlength: 5,
        maxlenght: 225,
        required: true
    },
    email:{
        type: String,
        unique: true,
        required: true
    },
    password:{
        type: String,
        required: true
    }
}));


function validateUser(user){
    const Schema = {
        name: Joi.string().min(2).max(225).required(),
        email: Joi.string().required(),
        password: Joi.string().required()
    };

    return Joi.validate(user,Schema);

}


exports.validate = validateUser;
exports.User = User;