const Joi = require('Joi');
const mongoose = require ('mongoose');
const express = require('express');
const router =  express.Router();


const Customer = new mongoose.model(mongoose.Schema({
    name: {
        type: String,
        
    }

}));