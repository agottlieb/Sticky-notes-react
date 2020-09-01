import React, { Component } from "react";

/* Presentational component 
  --renders title and description
  --can be change title and descript. directly in text
  --when changed, functions that are passed as props will update UI
  --updates occur in the state of the app compononent 
*/
class Note extends Component {
  updateTitle = (e) => {
    var updatedValue = e.target.value;
    var editMeId = this.props.note.id;
    this.props.onType(editMeId, "title", updatedValue);
  };
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
          value={this.props.note.title}
          onChange={this.updateTitle}
          placeholder="Title"
          className="note__title"
        />
        <textarea
          value={this.props.note.description}
          onChange={this.updateDescription}
          placeholder="Description..."
          className="note__description"
        />
        <span className="note__delete" onClick={this.clickDelete}>
          X
        </span>
      </li>
    );
  }
}

export default Note;
