import React, { Component } from 'react';
import 'milligram';

import Sidebar from './components/Sidebar'
import Editor from './components/Editor'

const NT_KEY = "LISTOFNOTES";

class App extends Component {
  constructor() {
    super();

    this.state = {
      notes: this.getNotes(),
      selectedNote: {
        index: -1,
        title: "",
        txt: ""
      }
    }

    this.getNotes = this.getNotes.bind(this);
    this.newNote = this.newNote.bind(this);
    this.selectNote = this.selectNote.bind(this);
    this.saveNote = this.saveNote.bind(this);
    this.updateListOfNotes = this.updateListOfNotes.bind(this);
  }

  getNotes() {
    //localStorage.setItem(NT_KEY, []);
    var storedData = localStorage.getItem(NT_KEY);
    var listNotes = [];
    console.log(storedData);
    if (storedData) {
        listNotes = JSON.parse(storedData);
    }
    return listNotes;
  }

  newNote() {
    var emptyNote = {
      index: -1,
      title: "",
      txt: ""
    }
    this.selectNote(emptyNote);
  }

  selectNote(note) {
    this.setState({selectedNote: note});
    document.getElementById('noteTitle').value = note.title;
    console.log(this.state.selectedNote);
  }

  saveNote(note) {
    if (note.title) {
      console.log (`Title: ${note.title} Note: ${note.txt}`);
      this.updateListOfNotes();
    }
    else {
      alert("Title cannot be empty");
    }
  }

  updateListOfNotes() {
    var updatedList = this.state.notes;
    console.log(updatedList);
    var node = this.state.selectedNote;
    if (this.state.selectedNote.index !== -1) {
      updatedList[node.index] = node;
    }
    else {
      node.index = updatedList.length;
      this.setState({selectedNote: node});
      updatedList.push(this.state.selectedNote);
    }
    this.setState({notes: updatedList});
    console.log(updatedList);

    localStorage.setItem(NT_KEY,  JSON.stringify(this.state.notes));
  }

  render() {
    return (
      <div className="App container">
        <h1>Note Taker</h1>
        <div className="row">
          <Sidebar notes={this.state.notes} selectNote={this.state.selectedNote} add={this.newNote} select={this.selectNote} />
          <Editor note={this.state.selectedNote} save={this.saveNote}/>
        </div>
      </div>
    );
  }
}

export default App;
