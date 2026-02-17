//Writing to a file
const fs = require('fs');
fs.writeFile('example01.txt', 'This is an example of writing to a file in Node.js', (err) => {
    if (err) {
        console.log('Error writing to file:');
    } else {
        console.log('File has been written successfully');
    }
});

//Reading from a file
fs.readFile('example01.txt', 'utf8', (err, data) => {
    if (err) {  
        console.log('Error reading file:');
    } else {
        console.log('File content:',data);
    }
});   

    