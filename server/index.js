const express = require('express');
const noteController = require('./controllers/note');

const app = express();
require('./config/db');

app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile('index.html');
});

app.post('/notes', noteController.createNote);

app.listen(3000, () => {
  console.log('Server listening at http://localhost:3000');
});
