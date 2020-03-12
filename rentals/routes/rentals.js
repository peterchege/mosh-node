const mongoose = require('mongoose');
const Joi = require('joi');
const {rentals} = require('../model/rentals');
const express = require('express');
const router = express.Router();


router.get('/', async(req,res)=>{
    const rentals = await Rentals.find('name');
    res.send(rentals);
});