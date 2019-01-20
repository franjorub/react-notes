const NoteSchema = require('../models/notes');

const noteService = {
  createNote: async ({ title, description }) => {
    const note = new NoteSchema({ title, description });
    try {
      const newNote = await note.save();
      console.log('note saved', newNote);
      return newNote;
    } catch (err) {
      console.log('error: ', err);
      return err;
    }
  },
};

module.exports = noteService;
