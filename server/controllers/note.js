const noteService = require('../services/notes');

const noteController = {
  createNote: (req, res) => {
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
  },
  getAllNotes: (req, res) => {
    console.log(req);
    res.send([{ title: 'dsafsadf', description: 'dsa;lfksalkflksadf' }]);
  },
};
module.exports = noteController;
