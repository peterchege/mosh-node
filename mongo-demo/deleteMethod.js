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


//update a document and return it
async function deletCourse(id) {
    // const result = await Course.deleteOne({_id: id});
    const course = await Course.findByIdAndRemove(id);
    console.log(course);
}
deletCourse('5e45c19b826f81269c3c4b57');