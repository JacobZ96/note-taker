const notes = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const dataBase = require('../db/db.json');
const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

notes.get('/notes-data', (req, res) => {
    readFile('../db/db.json', 'utf8');
});

notes.post('/notes', (req, res) => {
    writeFile('../db/db.json', JSON.stringify(note))
})



// exports file
module.exports = notes;