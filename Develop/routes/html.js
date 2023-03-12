const path = require('path');
const html = require('express').Router();


html.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
});

html.get('/notes', (req, res) => {
    res.sendFile(path.json(__dirname, '/public/notes.html'))
}); 

// exports file
module.exports = html;
