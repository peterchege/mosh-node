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

async function getCourses() {
     const result = await createCourse();
     console.log(result);
}

// Updating data in mongodb using :
// Query first
// findbyid()
// Modify its properties
// Save


//updating without showing results

// async function updateCourse(id){
//    const result = await Course.update({ _id: id }, { 
//     $set: {
//         author : 'Peter',
//         isPublished : false 
//     }
// });

//    console.log(result);
// }
// updateCourse('5e45c19b826f81269c3c4b57');

//update a document and return it
async function updateCourse(id) {
    const course = await Course.findByIdAndUpdate( id, {
        $set: {
            author: 'Chege',
            isPublished: false
        }
        }, { new: true });
        
    console.log(course);
}
updateCourse('5e45c19b826f81269c3c4b57');