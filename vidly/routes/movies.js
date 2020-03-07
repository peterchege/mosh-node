const {Movie, Validate} = require('../models/movies');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router;


router.get('/', async(req, res)=>{
    const movies = await Movie.find().sort('name');
    res.send(movies);

});

router.post('/', async(req,res)=>{
    const {error} = Validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    let movie =  new Movie ({
        title: req.body.title,
        genre: req.body.genre,
        numberInstock: req.body.numberInstock,
        dailyRentalRate: req.body.dailyRentalRate
    });
    movie = await movie.save();

    res.send(movie);
});



module.exports = router;