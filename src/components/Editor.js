import React, { Component } from 'react';
import SimpleMDE from 'react-simplemde-editor';

class Editor extends Component {
  constructor() {
    super();

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleEditorChange = this.handleEditorChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  handleTitleChange(e) {
    this.props.note.title = e.target.value;
  }

  handleEditorChange(txt) {
    this.props.note.txt = txt;
  }

  handleSave() {
    console.log("saving");
    this.props.save(this.props.note);
  }

  render() {
    return (
      <div className="editor column column-75">
        <input id="noteTitle" onChange={this.handleTitleChange} defaultValue={this.props.note.title }/>
        <SimpleMDE
          onChange = {this.handleEditorChange}
          value= {this.props.note.txt}
          options={{
            autofocus: true,
            autosave: true
          }}
        />
        <button onClick={this.handleSave}> Save </button>
      </div>
    );
  }
}

export default Editor;
