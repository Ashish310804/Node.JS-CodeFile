const express = require('express');
const mysql = require('mysql');

const app = express();

// Database connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "your_database"
});

// Connect DB
db.connect((err) => {
    if (err) throw err;
    console.log("Database Connected!");
});

// Route
app.get("/", (req, res) => {
    res.send("Server Running");
});

// Example SQL query
app.get("/data", (req, res) => {
    db.query("SELECT * FROM your_table", (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

// Server
app.listen(3000, () => {
    console.log("Server started on port 3000");
});