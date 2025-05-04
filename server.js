const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

// Add a new listing
app.post('/listings', (req, res) => {
  const { title, description, rent, address, rooms, contact } = req.body;
  const sql = 'INSERT INTO listings (title, description, rent, address, rooms, contact) VALUES (?, ?, ?, ?, ?, ?)';
  db.query(sql, [title, description, rent, address, rooms, contact], (err, result) => {
    if (err) return res.status(500).send(err);
    res.send('Listing added!');
  });
});

// Get all listings
app.get('/listings', (req, res) => {
  db.query('SELECT * FROM listings', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
