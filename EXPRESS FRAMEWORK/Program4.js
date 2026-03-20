//Queries in Express Framework

//Importing the Express module
const express = require('express');

//Creating an instance of the Express application
const app = express();

//Defining a route that accepts query parameters
app.get('/search', (req, res) => {
    const query = req.query.q;          // Accessing the 'q' query parameter
    if (query) {
        res.send("You searched for: " + query);
    } else {
        res.send('Please provide a search query using the "q" parameter (e.g., /search?q=your+query)');
    }   
});

//Starting the server and listening on port 3000
app.listen(3000, () => {    
    console.log('Server is running on http://localhost:3000');
});