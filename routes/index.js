const express = require('express');
const htmlRoute = require('./html');
const notesRoute = require('./notes');
const app = express();

app.use('/', htmlRoute);
app.use('/notes', notesRoute);

// exports file
module.exports = app; 