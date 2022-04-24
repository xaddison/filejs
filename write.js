var fs = require('fs');
var path = require('path');

fs.readFile(path.join(__dirname), 'files', 'start.txt', 'utf8' (err, data) => {
    if (err) throw err; 
    console.log('Read complete');
})


//write 

fs.readFile(path.join(__dirname), 'files', 'write.txt', 'utf8' (err, data) => {
    if (err) throw err; 
    console.log('Write complete');
})




// exit
Process.on('uncaughtException', err => {
    console.error('There was an uncaught error:  ${err}');