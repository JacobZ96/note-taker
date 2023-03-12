const notes = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const path = require('path');



// notes.get('/notes', (req, res) => {
//     fs.readFile(path.resolve(__dirname, '..', 'db/db.json'), 'utf8', (err, data) => {
//         if (err) console.log(err);
//         return res.json(JSON.parse(data));
//     }); 
// });

// notes.post('/notes', (req, res) => {
// if(req.body) {
//     const { title, text } = reg.body;
//     const newNote = {
//         title, 
//         text, 
//         id: uuidv4(),
//     };
//     fs.readFile(path.resolve(__dirname, '..', 'db/db.json'), 'utf8', (data) => {
//        let newData = JSON.parse(data)
//        newData.push(newNote)
//        let changedData = JSON.stringify(newData)

//     fs.writeFile(path.resolve(__dirname, '..', 'db/db.json'), changedData, (err) => {
//         console.log(err);
//         return res.json();
//     })
//     })
// }
// });

// notes.delete('/:id', (req, res) => {
// })


notes.get('/notes', (req, res) => {
    fs.readFile(path.resolve(__dirname, '..', 'db/db.json'), 'utf8', (err, data) => {
        if (err) console.log(err);
        return res.json(JSON.parse(data));
});
});

notes.post('/notes', (req, res) => {
console.log('here');
if (req.body) {
    const { title, text} = req.body;
    const newNote = {
        title,
        text,
        id: uuidv4(),
    };
    fs.readFile(path.resolve(__dirname, '..', 'db/db.json'), 'utf8', (err, data) => {
        console.log(data)
        let newData = JSON.parse(data)
        console.log('new data', newData)

        newData.push(newNote)

        let changedData = JSON.stringify(newData)

        fs.writeFile(path.resolve(__dirname, '..', 'db/db.json'), changedData, (err) => {
            console.log(err)
            return res.json();
        })      
    })
}
});


// exports file
module.exports = notes;