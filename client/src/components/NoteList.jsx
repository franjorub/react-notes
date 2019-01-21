import React, { Component } from 'react';

import notesMocks from '../utils/notes';
import Note from './Note';
import AddNote from './AddNote';

export default class NoteList extends Component {
  state = {
    notes: [],
  };

  componentDidMount() {
    this.setState({ notes: notesMocks });
  }

  onDeleteNote = (id) => {
    this.setState((prevState) => {
      const { notes } = prevState;
      const filterNotes = notes.filter(note => note.id !== id);
      return { notes: filterNotes };
    });
  };

  onUpdateNote = (event, newNote) => {
    const { notes } = this.state;
    const index = notes.findIndex(note => note.id === newNote.id);
    event.preventDefault();
    notes[index] = newNote;
    this.setState({ notes });
  };

  onCreateNote = (event, note) => {
    event.preventDefault();

    this.setState((prevState) => {
      const { notes } = prevState;
      notes.push(note);
      return { notes };
    });
  };

  render() {
    const { notes } = this.state;

    const noteList = notes.map(note => (
      <Note
        title={note.title}
        key={note.id}
        description={note.description}
        id={note.id}
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
