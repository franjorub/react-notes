const express = require('express');
const noteService = require('./services/notes');

const app = express();
require('./config/db');

app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile('index.html');
});

app.post('/notes', (req, res) => {
  const incomingNote = req.body;
  noteService
    .createNote(incomingNote)
    .then((note) => {
      console.log(note);
      res.status(201).send(note);
    })
    .catch((err) => {
      res.status(409).send(err);
    });
});

app.listen(3000, () => {
  console.log('Server listening at http://localhost:3000');
});
