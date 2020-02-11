const mongoose = require ('mongoose');

// connection to Mongodb
mongoose.connect('mongodb://localhost/playground')
.then( () => console.log('Connected to MongoDB....'))
.catch(err => console.err("Could not connect to MongoDB...", err))

// schema definition
const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: {type: Date, default: Date.now},
    isPublished: Boolean
});

// creating a model
const Course = mongoose.model('Course', courseSchema);
const course = new Course({
    name: "Nodejs Course",
    author: 'Peter',
    tags: ['node', 'backend'],
    isPublished: true
});