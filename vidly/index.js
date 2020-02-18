const genres = require('./routes/genres');
const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/vidly')
    .then(() => console.log('Connecting to Mongodb...'))
    .catch(err => console.error('Could not connect to mongodb...'));

app.use(express.json());
app.use('/api/genres', genres);

const port = process.env.PORT || 8500;
app.listen(port, () => console.log(`Listening on port ${port}...`));