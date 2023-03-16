const notes = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const path = require('path');
const { json } = require('express');



// gets note
notes.get('/notes', (req, res) => {
    fs.readFile(path.resolve(__dirname, '..', 'db/db.json'), 'utf8', (err, data) => {
        if (err) console.log(err);
        return res.json(JSON.parse(data));
    });
});

// save new notes
notes.post('/notes', (req, res) => {
if (req.body) {
    console.log('here');
    const { title, text } = req.body;
    const newNote = {
        title,
        text,
        id: uuidv4(),
    };
    fs.readFile(path.resolve(__dirname, '..', 'db/db.json'), 'utf8', (err, data) => {
        if (err) console.log(err);
        console.log(data);
        let newData = JSON.parse(data)
        console.log('New Data', newData)
        
        newData.push(newNote)
        
        let alteredData = JSON.stringify(newData)

        fs.writeFile(path.resolve(__dirname, '..', 'db/db.json'), alteredData, (err) => {
            console.log('hello')
            return res.json();
        })      
    })
}
});

// notes.delete('/note_:id', (req, res) => {
//     const noteId = req.params.notes_id;
//     readFile('../db/db.json')
//     .then((newData) => JSON.parse(newData))
//     .then((json) => {
//         console.log(json);
//         const result = json.filter((notes) => notes.id !== noteId);
//         fs.writeFile('../db/db.json', result);
//         res.json(`Item ${noteId} has been deleted 🗑️`);
//     });
// });

// exports file
module.exports = notes;