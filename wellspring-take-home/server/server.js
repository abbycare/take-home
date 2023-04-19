const express = require('express');
const app = express();
const cors = require('cors');
const port = 3001;


const patients = require('./patients');
const appointments = require('./appointments');

app.use(cors()); // Enable CORS for all routes

// API endpoint for recent patients list
app.get('/api/patients', (req, res) => {
  res.json(patients);
});

// API endpoint for upcoming visits list
app.get('/api/appointments', (req, res) => {
  res.json(appointments);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});