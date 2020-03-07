const {Movie, Validate} = require('../models/movies');
const {Genre} = require('../models/genres')
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

    const genre = await Genre.findById(req.body.genreId);
    if (!genre) return res.status(400).send('invalid genre.')

    let movie =  new Movie ({
        title: req.body.title,
        genre: {
            _id: genre._id,
            name: genre.name
        },
        numberInstock: req.body.numberInstock,
        dailyRentalRate: req.body.dailyRentalRate
    });
    movie = await movie.save();

    res.send(movie);
});



module.exports = router;