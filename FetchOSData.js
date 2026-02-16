//Modules required for this file
 const os = require('os');
 const fs = require('fs');
 const path = require('path');

let ostype  = os.type();
let osplatform = os.platform();
let osrelease = os.release();
let totalmemory = os.totalmem() / (1024 * 1024 * 1024); // Convert bytes to GB
let freememory = os.freemem() / (1024 * 1024 * 1024); 
let cpuModel = os.cpus()[0].model;
let cpuCores = os.cpus()[0].length;

let osData = 
    "type: "  + ostype + "\n" +
    "platform: " + osplatform + "\n" +
    "release: " + osrelease + "\n" +
    "totalMemory: " + totalmemory.toFixed(2) + " GB" + "\n" +
    "freeMemory: " + freememory.toFixed(2) + " GB" + "\n" +
    "cpuModel: " + cpuModel + "\n" +
    "cpuCores: " + cpuCores + "\n";

console.log(osData);

// Write the OS data to a Text file
const filePath = path.join(__dirname, 'osData.txt');

fs.writeFile(filePath, osData , (err) => {
    if (err) {
        console.log('Error writing to file:');
    } 
    else {
        console.log('OS data has been written to osData.txt');
    }   
});
