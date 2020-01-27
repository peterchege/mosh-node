const debug = require('debug')('app:startup');
const config = require('config');
const morgan = require('morgan');
const helmet = require('helmet');
const Joi = require('joi');
const logger = require('./logger');
const authenticator = require('./authenticator');
const express = require('express');
const app = express();

// Templating Engine

app.set('view engine', 'pug');
app.set('views', './views'); // default storage


//configurations
console.log('Application Name' + config.get('name'));
console.log('Mail server ' + config.get('mail.host'));
console.log('Mail password ' + config.get('mail.password'));


//environment defination
// console.log(`NODE_ENV : ${process.env.NODE_ENV}`);
// console.log(`app: ${app.get('env')}`);

//inbuilt middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

//third party middleware  
app.use(helmet());
// app.use(morgan('tiny'));

//condition for environment
if(app.get('env') === 'development') {

    app.use(morgan('tiny'));
    debug('Morgan enabled...'); // console.log shortcut

}

//Creating a custom middleware 
app.use(logger);
app.use(authenticator);

const courses = [
    { id:1, name: 'physics'},
    { id:2, name: 'mathematics' },
    { id:3, name: 'Chemistry'},
];


app.get('/', (req , res) =>{
    // res.send('Hello peter chege, js guru');
    res.render('index', {
        title: 'My Express App',
        message: 'Hello peter chege, js guru'
    });
});

app.get('/api/courses', (req, res)=>{
    res.send(courses);
});

app.get('/api/courses/:id',(req, res)=>{
   const course = courses.find(c=>c.id === parseInt(req.params.id));
   if(!course) return res.status(404).send('This course with the given ID was not found');
   res.send(course);
});

app.post('/api/courses', (req, res)=>{

     const { error } = validateCourse(req.body);
     if (error) return res.status(400).send(result.error.details[0].message);
       
     
    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(courses); 
});

app.put('/api/courses/:id', (req, res)=>{
    // Look up for the course
    // If not existing, return 404
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send("This course with the given ID was not found");

    // Validate
    // if invalid, return 404 - bad request    

    const { error } = validateCourse(req.body); 
    if (error) return res.status(400).send(result.error.details[0].message);
    
    //update course
    // Return the updated course
    course.name = req.body.name;
    res.send(course);

});

function validateCourse(course) {
    const schema = {
      name: Joi.string()
        .min(3)
        .required()
    };
    return Joi.validate(course, schema);
}

// DELETE FUNCTION
app.delete('/api/courses/:id', (req, res)=>{
    // Look up for the course
    // If not existing, return 404
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send("This course with the given ID was not found");

    // Delete
    const index = courses.indexOf(course);
    courses.splice(index, 1);

    // Return the same course
    res.send(course);
});

// ROUTE PARAMETERS

// app.get('/api/posts/:year/:month',(req, res)=>{
//     res.send(req.params);
// });

// QUERY PARAMETERS

// app.get('/api/posts/:year/:month', (req, res) => {
//     res.send(req.query);
// });


// Http Method
// app.get();
// app.post();
// app.length();
// app.delete();
// app.put();

// ENVIRONMENT VARIABLE
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening to port ${port}...`));
