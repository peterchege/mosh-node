const mongoose = require ('mongoose');

// connection to Mongodb
mongoose.connect('mongodb://localhost/playground')
.then( () => console.log('Connected to MongoDB....'))
.catch(err => console.log("Could not connect to MongoDB...", err))

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
        name: "Java Course",
        author: 'Chege',
        tags: ['Java', 'Backend'],
        isPublished: true
    });

    return await course.save();
    
}

async function getCourses() {
     const result = await createCourse();
     console.log(result);
}
// getCourses();

// Updating data in mongodb using :
// Query first
// findbyid()
// Modify its properties
// Save

async function updateCourse(id){
   const course = await Course.findById(id);
   if(!course) return;

   course.isPublished = true;
   course.name = 'PHP Course';
   course.tags= ['PHP', 'Backend'];

   const result = await course.save();
   console.log(result);
}
updateCourse('5e469d8728ef293ed8842a4c');