const express = require('express');
const api = require('./routes/index');
const path = require('path');
const PORT = process.env.PORT || 3001;

const app = express();
// Middleware
app.use(express.json());
app.use(express.urlencoded ({ extended: true }));

app.use(express.static('public'));
app.use('/', api);
 

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);

