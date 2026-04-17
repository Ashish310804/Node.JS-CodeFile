//Importing the Express module
const express = require('express');

//Creating an instance of the Express application
const app = express();

//Defining a route for the root URL
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

//Starting the server and listening on port 3000
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

