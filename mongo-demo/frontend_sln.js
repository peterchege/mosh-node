const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongo-exercises')

const courses = new mongoose.Schema({
    name: String,
    author: String,
    tags: [ String ],
    date: Date,
    isPublished: Boolean,
    price: Number
});

const Course = mongoose.model('Course', courses)

async function getCourses(){
    return await Course
    .find({isPublished: true, tags: {$in : ['frontend','backend']} })
    // .or([{tags: 'frontend'}, {tags: 'backend'}]) option 2 using logic operators
    .sort({price: -1})
    // .sort('-price') opt2 using strings
    .select({name: 1, author: 1, price: 1});
    // .select('name author price') opt2 using strings
}

async function run(){
    const courses = await getCourses();
    console.log(courses);
}

run();
