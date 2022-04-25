const process = require('');process
var fs = require('fs');

var path = require('path');


//write 

fs.readFile(path.join(__dirname), 'files', 'writefile.txt', 'utf8' (err, data) => {
    if (err) throw err; 
    console.log('\n')
    console.log('Write #1 complete');
})




// Uncaught
process.on('uncaughtException', (error) => {
    fs.writeSync(process.stdeer.fd , error);
    process.exit(1);
});