// PSUDOCODE
// bring in dependencies
// configure middleware
// Routes
    // homepage 
        // eg app.get('/')
        // send back the index.html
    // notes 
        // eg app.get('/notes')
    //notes api    
        // app.delete('/api/notes/:noteId')

        // app.post('/api/notes')

        // app.get('/api/notes')

const express = require('express');
const api = require('./routes/index');


const PORT = process.env.PORT || 3001;

const app = express();
// Middleware
app.use(express.json());
app.use(express.urlencoded ({ extended: true }));
app.use('/api', api);
app.use(express.static('public'));
 

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);

