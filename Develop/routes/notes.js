const notes = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const dataBase = require('../db/db.json');
const fs = require('fs');
const util = require('util');

// notes.get('/', (req, res) => {
//     readFromFile()
// })





module.exports = notes;