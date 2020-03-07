const Joi = require('joi');
const mongoose = require ('mongoose');
const genres = require('./models/genres');


const genreSchema = new mongoose.Schema({
    name: {
                type: String,
                required: true,
                minlength: 5,
                maxlength: 50
              }
});

const moviesSchema = new mongoose.Schema({
    title : {
        type: String,
        minlength: 5,
        maxlength: 70
    },
    genre :{
        type: [genreSchema],
        required: true
    },
    numberInstock : {
        type : Number,
        required: true
    },
    dailyRentalRate :{
        type: Number,
        required: true
    }
});

const Movie = mongoose.model('moviesSchema', moviesSchema);

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