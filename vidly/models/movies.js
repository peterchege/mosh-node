const Joi = require('joi');
const mongoose = require ('mongoose');
const {genreSchema} = require('./genres')


const Movie = mongoose.model('Movies', new mongoose.Schema({
    title: {
            type: String,
            required: true,
            trim: true,
            minlength: 5,
            maxlength: 255
        },
    genre: {
            type: genreSchema,
            required: true
        },
    numberInstock: {
            type: Number,
            required: true,
            min: 0,
            max: 255
        },
    dailyRentalRate: {
            type: Number,
            required: true,
            min: 0,
            max: 255
        }
}));

function validateMovie(movie){
    const Schema = {
        title: Joi.string().min(5).max(50).required(),
        genreId: Joi.string().required(),
        numberInstock: Joi.Number().required(),
        dailyRentalRate: Joi.Number().required()
    };

    return Joi.validate(movie,schema);
}

exports.Movie = Movie;
exports.validate = validateMovie;