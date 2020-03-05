const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

const authorSchema = new mongoose.Schema({
  name: String,
  bio: String,
  website: String
});

const Author = mongoose.model('Author', authorSchema);

const Course = mongoose.model('Course', new mongoose.Schema({
  name: String,
  authors: {
    type: [authorSchema],
    required: true
  }
}));

async function createCourse(name, authors) {
  const course = new Course({
    name, 
    authors
  }); 
  
  const result = await course.save();
  console.log(result);
}

async function listCourses() { 
  const courses = await Course.find();
  console.log(courses);
}

async function UpdateAuthor(courseId) {
  const course = await Course.update({ _id: courseId},{
    $set:{
      'author.name': 'john Smith'
    }
  });
}

async function addAuthor (courseId, author){
  const course = await Course.findById(courseId);
  course.authors.push(author);
  course.save();
}

async function removeAuthor(courseId, authorId){
  const course = await Course.findById(courseId);
  const author = course.authors.id(authorId);
  author.remove();
  course.save();
}

// UpdateAuthor('5e539ee8467158044037a24e');

// createCourse('Node Course', [
//   new Author({ name: 'Mosh' }),
//   new Author({ name: 'Peter' }),
//   new Author({ name: 'chege' })
// ]);


// addAuthor('5e61050d2c733146cc1618e1', new Author({name: 'Mwangi'}));

removeAuthor('5e61050d2c733146cc1618e1', '5e61077ca26be82d9c423ff8');