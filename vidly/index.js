import genres from './routes/genres';
import customers from './routes/customers';
import express, { json } from 'express';
const app = express();
import { connect } from 'mongoose';

connect('mongodb://localhost/vidly')
    .then(() => console.log('Connecting to Mongodb...'))
    .catch(err => console.error('Could not connect to mongodb...'));

app.use(json());
app.use('/api/genres', genres);
app.use('/api/customers', customers);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));