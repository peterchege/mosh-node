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

const Course = mongoose.model('Course', courseSchema);


//create async function to get the promise
async function createCourse() {
    // creating a model
    const course = new Course({
        name: "Svelte Course",
        author: 'Chege',
        tags: ['Svelte', 'frontend'],
        isPublished: true
    });

    return await course.save();
    
}

// Querying from Mongodb
async function getCourses() {
     const result = await createCourse();
     console.log(result);
}

getCourses();