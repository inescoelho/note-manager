import React, { Component } from 'react';

class Sidebar extends Component {
  constructor() {
    super();

    this.renderListOfNotes = this.renderListOfNotes.bind(this);
  }

  renderListOfNotes() {
    var listOfNotes = [];

    this.props.notes.forEach( (note) => {
      listOfNotes.push (
        <li key={note.index} onClick={ () => this.props.select(note) }  className={note.index === this.props.selectNote.index ? 'selected' : ''}>
          <input className="button button-clear" type="submit" value={note.title} onChange={()=>{}}/>
        </li>
      )
    });

    return listOfNotes;
  }

  render() {
    return (
      <div className="sidebar column column-25">
        <button className="button button-clear" onClick={this.props.add}>+ new note</button>
        <dl id="noteIndex">
          {this.renderListOfNotes()}
        </dl>
      </div>
    );
  }
}

export default Sidebar;
