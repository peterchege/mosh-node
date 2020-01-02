//  function myName(name){
//      console.log(" Hello " + name);   
//  }

//  myName("peter");

// const path = require('path');
// var pathObj = path.parse(__filename);

// console.log(pathObj);

// const os = require('os');

// var totalMemory = os.totalmem();
// var freeMemory = os.freemem();
// var cpus = os.cpus();

// console.log('Total Memory:' + totalMemory);
// console.log('Free Memory:' + freeMemory);
// console.log('Number of Cpu:' + cpus);


// console.log(`Total Memory: ${totalMemory}`);
// console.log(`Free Memory: ${freeMemory}`);

// const fs = require('fs');

// var file = fs.readdirSync('./');
// console.log(file);

// fs.readdir('./', function(err, file){
//     if (err) console.log('Error', err);
//     else console.log('Result', files);
// });


const os = require('os');

var platform = os.platform();

console.log('Free Memory:', platform );