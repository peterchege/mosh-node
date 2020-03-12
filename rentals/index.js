const mongoose = require('mongoose');
const {rentals} = require('./routes/rentals');
const express = require ('express');
const app = express();


mongoose.connect('mongodb://localhost/rentals')
    .then(()=> console.log("Connecting to MongoDB..."))
    .catch(err =>console.error('Could not connect to mongoDB...'));

app.use(express.json());
app.use('/api/rentals', rentals);

const port = process.env.port || 3000;
app.listen(port, ()=> console.log(`listening on port${port}...`));