const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    // res.send('Hello peter chege, js guru');
    res.render('index', {
        title: 'My Express App',
        message: 'Hello peter chege, js guru'
    });
});


module.exports = router;