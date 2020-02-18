const Joi = require('Joi');
const mongoose = require ('mongoose');
const express = require('express');
const router =  express.Router();


const Customer = mongoose.model('Cusomer', new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlenght: 5,
        maxlength: 50
    },
    phone: {
        type: Number,
        required: true,
        minlenght: 12
    },
    isGold:{
        type: Boolean,
        required: true
    }

}));

router.get('/', async (res, req)=>{
    const customer = await Customer.find().sort('name');
    res.send(customer);
});

router.post('/', async (res, req) =>{
    const { error } = validatecustomer(req.body);

    let customer = new Customer({
        name: req.body.name,
        phone: req.body.phone,
        isGold: req.body.isGold
    });
    customer = await customer.save();
});

function validatecustomer(){
    const schema ={
        name: Joi.String().min(3).required(),
        phone: Joi.Number().min(12).required,
        isGold: Joi.Boolean().required

    };
};

module.exports = router;