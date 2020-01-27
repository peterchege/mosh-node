const debug = require('debug')('app:startup');
const config = require('config');
const morgan = require('morgan');
const helmet = require('helmet');
const Joi = require('joi');
const logger = require('./middleware/logger');
const courses = require('./routes/courses');
const home = require('./routes/home');
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
app.use('/api/courses', courses);
app.use('/', home);


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
