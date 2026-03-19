// Program to create a simple Express server
// that responds to various routes with different messages
// and also demonstrates the use of middleware to log requests

//Importing the Express module
const express = require('express'); 

//Creating an instance of the Express application
const app = express();

//Middleware to log the request method and URL
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next(); // Call the next middleware or route handler
});

//Defining a route for the root URL
app.get('/', (req, res) => {
    res.send('Hello, World!');
});