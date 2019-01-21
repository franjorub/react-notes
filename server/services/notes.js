const Notes = require('../models/notes');

const noteService = {
  createNote: async ({ title, description }) => {
    const note = new Notes({ title, description });
    try {
      const newNote = await note.save();
      console.log('note saved', newNote);
      return newNote;
    } catch (err) {
      console.log('error: ', err);
      return err;
    }
  },
  getAllNotes: (payload = {}) => new Promise((resolve, reject) => {
    Notes.find(payload, (err, data) => {
      if (err) return reject(err);

      return resolve(data);
    });
  }),
  getNoteById: id => new Promise((resolve, reject) => {
    Notes.findOne({ _id: id }, (err, data) => {
      if (err) return reject(err);

      return resolve(data);
    });
  }),
  updateNote: (id, payload) => new Promise((resolve, reject) => {
    console.log(payload);
    Notes.findOneAndUpdate({ _id: id }, { $set: payload }, (err, data) => {
      if (err) return reject(err);

      return resolve(data);
    });
  }),
  deleteNote: id => new Promise((resolve, reject) => {
    Notes.findOneAndDelete({ _id: id }, (err, data) => {
      if (err) return reject(err);

      return resolve(data);
    });
  }),
};

module.exports = noteService;
