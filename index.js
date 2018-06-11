/*
 *  Server entry point
 */

// External dependencies
const express = require('express');
const bodyParser = require('body-parser');

// Create Express server
const app = express();

// Configure express to use body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Config variables
const httpPort = 3000;

// Expost public directory
app.use(express.static(__dirname + '/public'));

// Define index route
app.get('*', (req, res) => res.sendFile(__dirname + '/public/index.html'));

// Define create card route
app.post('/card', (req, res) => {
  console.log(req.body);
  res.send('Hello');
});

// Listen on port
app.listen(httpPort, () => console.log('Listening on port: ' + httpPort));
