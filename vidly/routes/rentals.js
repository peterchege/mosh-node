const {Rentals, validate} = require('../models/rental'); 
const {Movie, validate} = require('../models/movie'); 
const {Genre} = require('../models/genre');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    const rentals = await Customer.find().sort('-dateOut');
    res.send(rentals);
});

router.post('/', async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

     const customer = await Genre.findById(req.body.customerId);
     if (!customer) return res.status(400).send('Invalid customer.');

     const movie = await Genre.findById(req.body.movieId);
     if (!movie) return res.status(400).send('Invalid movie.');

     if(movie.numberInStock === 0) return res.status(400).send('Movie not in Stock.');

      let rentals = new Rentals({
          customer: {
            _id: customer.Id,
            name : customer.name,
            phone: customer.phone
          },
      });
      rentals = await customer.save();

      res.send(rentals);
});