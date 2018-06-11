/*
 *  Server entry point
 */

// Node dependencies
const express = require('express');

// Create Express server
const app = express();

// Config
const httpPort = 3000;

// Expost public directory
app.use(express.static(__dirname + '/public'));

// Define index route
app.get('*', (req, res) => res.sendFile(__dirname + '/public/index.html'));

// Listen on port
app.listen(httpPort, () => console.log('Listening on port: ' + httpPort));
