import React, { Component } from "react";

/* Presentational component 
  --renders title and description
  --can be change title and descript. directly in text
  --when changed, functions that are passed as props will update UI
  --updates occur in the state of the app compononent 
*/
class Note extends Component {
  //method to update the title
  updateTitle = (e) => {
    var updatedValue = e.target.value;
    var editMeId = this.props.note.id;
    this.props.onType(editMeId, "title", updatedValue);
  };
  //method to update the description
  updateDescription = (e) => {
    var updatedValue = e.target.value;
    var editMeId = this.props.note.id;
    this.props.onType(editMeId, "description", updatedValue);
  };
  render() {
    return (
      <li className="note">
        <input
          type="text"
          placeholder="Title"
          className="note__title"
          value={this.props.note.title}
          onChange={this.updateTitle}
        />
        <textarea
          placeholder="Description..."
          className="note__description"
          value={this.props.note.description}
          onChange={this.updateDescription}
        />
        <span className="note__delete">X</span>
      </li>
    );
  }
}

export default Note;
