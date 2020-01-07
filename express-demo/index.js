const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json());

const courses = [
    { id:1, name: 'physics'},
    { id:2, name: 'mathematics' },
    { id:3, name: 'Chemistry'},
];


app.get('/', (req , res) =>{
    res.send('Hello peter chege, js guru');
});

app.get('/api/courses', (req, res)=>{
    res.send(courses);
});

app.get('/api/courses/:id',(req, res)=>{
   const course = courses.find(c=>c.id === parseInt(req.params.id));
   if(!course) res.status(404).send('This course with the given ID was not found');
   res.send(course);
});

app.post('/api/courses', (req, res)=>{
    const schema = {
        name: Joi.string().min(3).required()
    };
    const result = Joi.validate(req.body, schema);
    console.log(result);

    if (!req.body.name || req.body.name.length < 3){
        //404 bad request
        res.status(404).send('Name is required and should be less than 3 character');
        return;
    }
    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(courses);
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
