import React, { Component } from 'react';

import NoteList from './NoteList';
import Header from './Header';

export default class App extends Component {
  state = {};

  render() {
    return (
      <div>
        <Header />
        <NoteList />
      </div>
    );
  }
}
