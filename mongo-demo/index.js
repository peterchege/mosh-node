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

//create async function to get the promise
async function createCourse() {
    // creating a model
    const Course = mongoose.model('Course', courseSchema);
    const course = new Course({
        name: "Angular Course",
        author: 'Peter',
        tags: ['angular', 'frontend'],
        isPublished: true
    });

    const result = await course.save();
    console.log(result);
}

// Querying from Mongodb
async function getCourses() {

// comparison operators
// eq (equal)
// ne (not equal)
// gt (greater than)
// gte (greater than or equal to)
// lt (less than)
// lte (less than or equal to)
// in 
// nin (not in)
    const courses = await Course
    // .find({ author: 'Peter', isPublished: true})
    // .find({ price: { $gte: 10, $lte: 20 } })
    .find({ price: { $in: [10, 50, 20]} })
    .limit(10)
    .sort({ name: 1 })
    .select({ name : 1, tags: 1 });
    console.log(courses);
}

getCourses();

// createCourse();