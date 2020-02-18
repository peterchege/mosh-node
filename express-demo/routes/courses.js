const express = require('express');
const router = express.Router();

const courses = [{
        id: 1,
        name: 'physics'
    },
    {
        id: 2,
        name: 'mathematics'
    },
    {
        id: 3,
        name: 'Chemistry'
    },
];


router.get('/', (req, res) => {
    res.send(courses);
});

router.get('/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('This course with the given ID was not found');
    res.send(course);
});

router.post('/', (req, res) => {

    const {
        error
    } = validateCourse(req.body);
    if (error) return res.status(400).send(result.error.details[0].message);


    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(courses);
});

router.put('/:id', (req, res) => {
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
router.delete('/:id', (req, res) => {
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


module.exports = router;