const os = require('os');

var totalMemory = os.totalmem();
var freespace = os.freemem();


console.log('Total Memory ' + totalMemory);
console.log('Freespace ' + freespace);

// Templating string 
// ES6 / ES2015 : ECMAScript 6

console.log(`Total Memory: ${totalMemory}`);
console.log(`Free Space: ${freespace}`);