const mongoose = require('mongoose');

// connection to Mongodb
mongoose.connect('mongodb://localhost/playground')
    .then(() => console.log('Connected to MongoDB....'))
    .catch(err => console.err("Could not connect to MongoDB...", err))

// schema definition
const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: {
        type: Date,
        default: Date.now
    },
    isPublished: Boolean
});

async function createCourse() {
    // creating a model
    const Course = mongoose.model('Course', courseSchema);
    const course = new Course({
        name: "Angular Course",
        author: 'Peter',
        tags: ['angular', 'frontend'],
        isPublished: true
    });

    try {
        const result = await course.save();
        console.log(result);
    } catch (err) {
        console.log(err);
    }

}

// Querying from Mongodb
async function getCourses() {
    const pageNumber = 2;
    const pageSize = 10;

    try {
        const courses = await Course
            .find({ author: 'Peter', isPublished: true })
            .skip(pageNumber -1 * pageSize)
            .limit(pageSize)
            .sort({ name: 1 })
            .select({name: 1, tags: 1});
    
        console.log(courses);
    } catch (err) {
        console.log(err);
    }

}

getCourses();

// createCourse();