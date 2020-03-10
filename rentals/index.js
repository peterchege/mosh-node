const mongoose = require('mongoose');
const {rentals} = require('./routes/rentals');
const express = require ('express');
const app = express();


mongoose.connect('mongodb://localhost/rentals')
    .then(()=> console.log("Connecting to MongoDB..."))
    .catch(err =>console.error('Could not connect to mongoDB...'));