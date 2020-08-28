import React from "react";

var Note = (props) => (
  <li className="note">
    <input
      type="text"
      placeholder="Title"
      className="note__title"
      value={props.note.title}
    />
    <textarea
      placeholder="Description..."
      className="note__description"
      value={props.note.description}
    />
    <span className="note__delete">X</span>
  </li>
);

export default Note;
