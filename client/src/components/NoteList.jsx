/* eslint-disable no-underscore-dangle */
import React, { Component } from 'react';
import Note from './Note';
import AddNote from './AddNote';
import notesServices from '../services/notesServices';

export default class NoteList extends Component {
  state = {
    notes: [],
  };

  componentDidMount() {
    notesServices.getNotes().then(({ data }) => {
      this.setState({ notes: data });
    }).catch((err) => {
      console.log(err);
    });
    // this.setState({ notes: notesMocks });
  }

  onDeleteNote = (_id) => {
    notesServices.deleNote(_id).then(() => {
      this.setState((prevState) => {
        const { notes } = prevState;
        const filterNotes = notes.filter(note => note._id !== _id);
        return { notes: filterNotes };
      });
    }).catch((err) => {
      console.log(err);
    });
  };

  onUpdateNote = (event, newNote) => {
    event.preventDefault();
    console.log(newNote._id);
    notesServices.updateNote(newNote).then(() => {
      const { notes } = this.state;
      const index = notes.findIndex(note => note._id === newNote._id);
      notes[index] = newNote;
      this.setState({ notes });
    }).catch((err) => {
      console.log(err);
    });
  };

  onCreateNote = (event, note) => {
    event.preventDefault();
    console.log(note);
    notesServices.createNote(note).then(({ data }) => {
      console.log(data);
      this.setState((prevState) => {
        const { notes } = prevState;
        notes.push(data);
        return { notes };
      });
    }).catch((err) => {
      console.log(err);
    });
  };

  render() {
    const { notes } = this.state;

    const noteList = notes.map(note => (
      <Note
        title={note.title}
        key={note._id}
        description={note.description}
        _id={note._id}
        onDeleteNote={this.onDeleteNote}
        onUpdateNote={this.onUpdateNote}
      />
    ));
    return (
      <div className="container border p-4">
        <AddNote onCreateNote={this.onCreateNote} />
        <div className="row">{noteList}</div>
      </div>
    );
  }
}
