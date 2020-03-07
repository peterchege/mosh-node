const Joi = require('joi');
const mongoose = require ('mongoose');
const {genreSchema} = require('./genres')


const Movie = mongoose.model('movieSchema', new mongoose.Schema({
    title: {
            type: String,
            required: true,
            trim: true,
            minlength: 5,
            maxlength: 225
        },
        genre: {
            type: genreSchema,
            required: true
        },
        numberInstock: {
            type: Number,
            required: true
        },
        dailyRentalRate: {
            type: Number,
            required: true
        }
}));

function validateMovie(movie){
    const Schema = {
        title: Joi.string().min(5).required,
        numberInstock: Joi.Number().required,
        dailyRentalRate: Joi.Number().required
    };

    return Joi.validate(movie,schema);
}

exports.Movie = Movie;
exports.validate = validateMovie;