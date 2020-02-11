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

    try{
         const result = await course.save();
         console.log(result);
    }
     catch (err) {
         console.log(err);
     }
   
}

// Querying from Mongodb
async function getCourses() {

// Comparison Operators
// eq (equal)
// ne (not equal)
// gt (greater than)
// gte (greater than or equal to)
// lt (less than)
// lte (less than or equal to)
// in 
// nin (not in)

// Logical Opertors
// or
// and
    try{
            const courses = await Course
                .find({
                    author: 'Peter',
                    isPublished: true
                })

                // Comparison operators examples
                // .find({ price: { $gte: 10, $lte: 20 } })
                // .find({ price: { $in: [10, 50, 20] } })

                // Logical operators example
                // .find()
                // .or([ { author: 'Peter' }, {isPublished: true} ])

                // Regular Expressions template
                // .find({ author: /pattern/})
                // // starting with Peter
                // .find({ author: /^Peter/ })
                // //Ending with Peter 
                // .find({ author: /Peter$/ }) //case sensitive
                // .find({ author: /Peter$/i })
                // // Contains peter
                // .find({ author: /.*peter.*/i})

                .limit(10)
                .sort({
                    name: 1
                })
            .select({ name : 1, tags: 1 });
            // // using count to the number of docs
            // count();
            console.log(courses);
    }
     catch (err) {
         console.log(err);
     }

}

getCourses();

// createCourse();