const express = require('express');
const app = express();

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
