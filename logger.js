const EventEmitter = require('events');

var url = "http://vinehub.co.ke/api"

class Logger extends EventEmitter{

 log(message){
    // sending message to the Http
    console.log('good job man');

    // Raised an event
    this.emit('messagelogged', { id: 1, url:'http://' });

    }
}


// exporting an object
// making the varible global to the rest of the modules

// module.exports.log = log;

//i can also customize the name of the varible 
// module.exports.endpoint = url;

// exporting an method

module.exports = Logger;