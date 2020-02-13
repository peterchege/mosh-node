const mongoose = require ('mongoose');


mongoose.connect('mongodb://localhost/mongo-exercises')
.then(()=> console.log('Connecting to mongodb...'))
.catch(err => console.err("Could not connect to MongoDB...", err));


const courses = new mongoose.Schema({
    name: String,
    author: String,
    tags: [ String ],
    date: Date,
    isPublished: Boolean,
    price: Number
});

const course = mongoose.model('Course', courses)

async function getPublishedCourse(){
    return await course
            .find({isPublished: true })
            .or([{price: {$gte: 15}}, {name: /.*by.*/i }])
            .sort('-price')
            .select('name author price');
}

async function run() {
    const result = await getPublishedCourse();
    console.log(result)
}
run();