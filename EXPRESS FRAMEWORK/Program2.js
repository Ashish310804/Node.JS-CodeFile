//Importing the Express module
const express = require('express');

//Creating an instance of the Express application
const app = express();

//Defining a route for the root URL
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

//Defining a route for the /about URL
app.get('/about', (req, res) => {
    res.send('This is the about page.');
});

//Defining a route for the /contact URL
app.get('/contact', (req, res) => {
    res.send('This is the contact page.');
});

//Defining a route for the /users URL
app.get('/users', (req, res) => {
    res.send('This is the users page.');
});

//Defining a route for the /products URL
app.get('/products', (req, res) => {
    res.send('This is the products page.');
});

//Defining a route for the /services URL
app.get('/services', (req, res) => {
    res.send('This is the services page.');
});


//Defining a route for the /blog URL
app.get('/blog', (req, res) => {
    res.send('This is the blog page.');
});

//Starting the server and listening on port 3000
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});