const {Rentals, validate} = require('../models/rental'); 
const {Movie, validate} = require('../models/movie'); 
const {Genre} = require('../models/genre');
const mongoose = require('mongoose');
const Fawn = require("fawn");
const express = require('express');
const router = express.Router();

Fawn.init(mongoose);

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

      let rental = new Rentals({
          customer: {
            _id: customer.Id,
            name : customer.name,
            phone: customer.phone
          },
          movie: {
              _id: movie._id,
              title: movie.title,
              dailyRentalRate: movie.dailyRentalRate
          }
      });
      rental = await customer.save();

      movie.numberInStock--;
      movie.save();

      res.send(rental);
});