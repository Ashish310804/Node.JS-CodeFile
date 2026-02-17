//1. Writing to a file
const fs = require('fs');
fs.writeFile('example01.txt', 'This is an example of writing to a file in Node.js', (err) => {
    if (err) {
        console.log('Error writing to file:');
    } else {
        console.log('File has been written successfully');
    }
});

//2. Reading from a file
fs.readFile('example01.txt', 'utf8', (err, data) => {
    if (err) {  
        console.log('Error reading file:');
    } else {
        console.log('File content:',data);
    }
});   

//3. Appending to a file
fs.appendFile('example01.txt', '\nThis newline is appended to the file.', (err) => {
    if (err) {
        console.log('Error appending to file:');
    }
    else{
        console.log('Content has been appended successfully');
    }
});

//4. Copying a file
fs.copyFile('example01.txt', 'example02.txt', (err) => {
    if (err) {
        console.log('Error copying file:');
    }       
    else{
        console.log('File has been copied successfully');
    }
});

//5. Renaming a file
fs.rename('example02.txt', 'example03.txt', (err) => {
    if (err) {
        console.log('Error renaming file:');
    }
    else{
        console.log('File has been renamed successfully');
    }
});


//6. Deleting a file
fs.unlink('example03.txt', (err) => {
    if (err) {
        console.log('Error deleting file:');
    }
    else{
        console.log('File has been deleted successfully');
    }
});

// 7. Checking if a file exists
fs.access('example01.txt', fs.constants.F_OK, (err) => {
    if (err) {  
        console.log('File does not exist:');
    } else {
        console.log('File exists');
    }
});

//8. Creating a directory
fs.mkdir('exampleDir', (err) => {
    if (err) {
        console.log('Error creating directory:');
    } else {
        console.log('Directory has been created successfully');
    }   
});

//9. Reading a directory
fs.readdir('exampleDir', (err, files) => {
    if (err) {
        console.log('Error reading directory:');
    } else {
        console.log('Files in directory:', files);
    }   
});

//10. Deleting a directory
fs.rmdir('exampleDir', (err) => {
    if (err) {
        console.log('Error deleting directory:');
    } else {
        console.log('Directory has been deleted successfully');
    }   
});

//11. Get file stats
fs.stat('example01.txt', (err, stats) => {
    if (err) {     
        console.log('Error getting file stats:');
    } else {
        console.log('File stats:', stats);
        console.log('Is file:', stats.isFile());
        console.log('Is directory:', stats.isDirectory());  
        console.log('File size:', stats.size, 'bytes');
    }   
});

