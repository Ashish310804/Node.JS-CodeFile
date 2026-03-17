const path = require("path");

// Use double backslashes OR template string with String.raw
const samplePath = "C:\\Users\\Ashish Dwivedi\\OneDrive\\Pictures\\Screenshots\\wallpaper108.png";

let filenameWithExt = path.basename(samplePath);
let extension = path.extname(samplePath);

console.log("Original Path:", samplePath);
console.log("Filename with Extension:", filenameWithExt);
console.log("Extension:", extension);
console.log("Filename without Extension:", path.basename(samplePath, extension));