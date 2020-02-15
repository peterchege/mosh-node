const mongoose = require ('mongoose');

// connection to Mongodb
mongoose.connect('mongodb://localhost/playground')
.then( () => console.log('Connected to MongoDB....'))
.catch(err => console.log("Could not connect to MongoDB...", err))

// schema definition
const courseSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true,
        minlength: 5,
        maxlength: 225
    },
    category:{
        type: String,
        require:true,
        enum: ['web', 'mobile','network'],
        
    },
    author: String,
    tags: [String],
    date: {type: Date, default: Date.now},
    isPublished: Boolean,
    price: {
        type: Number,
        required: function () {return this.isPublished;}
    }
});

const Course = mongoose.model('Course', courseSchema);


//create async function to get the promise
async function createCourse() {
    // creating a model
    const course = new Course({
        // name: "Scala Course",
        author: 'Peter Chege',
        tags: ['scala', 'Backend'],
        category: '-',
        isPublished: true,
        price: 340
    });

    try{
        const result = await course.save();
        console.log(result);
    }
    catch(ex){
        console.log(ex.message);
    }
    
}
createCourse()

// async function getCourses() {

//     try{
//         await createCourse.validate();
//         // const result = await createCourse();
//         // console.log(result);
//     }
//     catch(ex){
//         console.log(ex.message);
//     }
     
// }
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
// updateCourse('5e469d8728ef293ed8842a4c');