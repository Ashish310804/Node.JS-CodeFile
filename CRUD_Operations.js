const express = require('express');
const app = express();

app.use(express.json());

app.post('/create', (req, res) => {
  res.send('Data Created');
});

app.get('/read', (req, res) => {
  res.send('Data Read');
});

app.put('/update', (req, res) => {
  res.send('Data Updated');
});

app.delete('/delete', (req, res) => {
  res.send('Data Deleted');
});

app.listen(3000);