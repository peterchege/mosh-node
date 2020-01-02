const EmitterEvent = require('events');
const emitter = new EmitterEvent();


// Register a listener 
emitter.on('emitterlogin', (arg) =>{
    console.log('Login sucessfully', arg);
});


// Raise an event

emitter.emit('emitterlogin',{id:1 , url: 'https://'})