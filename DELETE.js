const fs = require('fs');

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