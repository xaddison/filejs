const process = require('process');
var fs = require('fs');
const path = require('path');


// read 
fs.readFile(path.join(__dirname), 'files', 'start.txt', 'utf8' (err, data) => {
    if (err) throw err; 
    console.log('Read complete');
})


// exit
Process.on('uncaughtException', err => {
    console.error(`There was an uncaught error:  ${err}`);
    process.exit(1);
})

