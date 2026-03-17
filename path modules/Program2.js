/*
Write a program to upload a image file using terminal only. You have to give image path on terminal and image will save on server in a folder using nodejs.
Complete it:-
1. validate only image files
2. rename image while saving
3. save with timestamp
4. handle errors properly
*/

const fs = require("fs");
const path = require("path");

const inputPath = "C:\\Users\\Ashish Dwivedi\\OneDrive\\Pictures\\Screenshots\\wallpaper108.png";

if (!inputPath) {
    console.error("Please provide image path!");
    process.exit(1);
}

try {
    if (!fs.existsSync(inputPath)) {
        console.error("File does not exist!");
        process.exit(1);
    }
    const allowedExtensions = [".jpg", ".jpeg", ".png", ".gif", ".webp"];
    const ext = path.extname(inputPath).toLowerCase();
    if (!allowedExtensions.includes(ext)) {
        console.error("Only image files are allowed!");
        process.exit(1);
    }
    const uploadDir = path.join(__dirname, "uploads");
    if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true });
    }
    const timestamp = Date.now();
    const random = Math.floor(Math.random() * 10000);
    const newFileName = "image_" + timestamp + "_" + random + ext;
    const destPath = path.join(uploadDir, newFileName);
    fs.copyFileSync(inputPath, destPath); // using sync for simplicity
    console.log("Image uploaded successfully!");
    console.log("Saved as:", newFileName);
    console.log("Location:", destPath);
} 
catch (err) {
    console.error("Error uploading file:", err.message);
}