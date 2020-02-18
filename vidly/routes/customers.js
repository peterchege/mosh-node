const {Customer, validate} = require('../models/customer');
const mongoose = require('mongoose');
const express = require('express');
const router =  express.Router();


router.get('/', async (req, res)=>{
    const customers = await Customer.find().sort('name');
    res.send(customers);
});

router.post('/', async (req, res) =>{
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let customer = new Customer({
        name: req.body.name,
        isGold: req.body.isGold,
        phone: req.body.phone
       
    });
    customer = await customer.save();
    res.send(customer);
});

router.delete('/:id', async (req, res)=>{
    const customer = await Customer.findByIdAndRemove(req.param.id);

    if(!customer) return res.status(404).send('The customer wasnt found');

    res.send(customer);
});


module.exports = router;