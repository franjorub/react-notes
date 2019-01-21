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
    noteService
      .getAllNotes()
      .then((notes) => {
        console.log(notes);
        res.status(201).send(notes);
      })
      .catch((err) => {
        console.log('error: ', err);
        res.status(409).send(err);
      });
  },
  getNoteById: (req, res) => {
    const { id } = req.params;
    noteService
      .getNoteById(id)
      .then((note) => {
        console.log(note);
        res.status(201).send(note);
      })
      .catch((err) => {
        console.log('error: ', err);
        res.status(409).send(err);
      });
  },
  updateNote: (req, res) => {
    const { id } = req.params;
    const newNote = req.body;

    noteService
      .updateNote(id, newNote)
      .then((note) => {
        console.log(note);
        res.status(201).send(note);
      })
      .catch((err) => {
        console.log('error: ', err);
        res.status(409).send(err);
      });
  },
  deleteNote: (req, res) => {
    const { id } = req.params;

    noteService
      .deleteNote(id)
      .then((note) => {
        console.log(note);
        res.status(201).send(note);
      })
      .catch((err) => {
        console.log('error: ', err);
        res.status(409).send(err);
      });
  },
};
module.exports = noteController;
