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

router.get('/', async (req, res)=>{
    const customers = await Customer.find().sort('name');
    res.send(customers);
});

router.post('/', async (req, res) =>{
    const { error } = validatecustomer(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let customer = new Customer({
        name: req.body.name,
        isGold: req.body.isGold,
        phone: req.body.phone
       
    });
    customer = await customer.save();
    res.send(customer);
});

function validatecustomer(customer){
    const schema = {
        name: Joi.string().min(5).max(50).required(),
        isGold: Joi.boolean(),
        phone: Joi.string().min(12).max(50).required()  
    };
    return Joi.validate(customer, schema);
};

module.exports = router;