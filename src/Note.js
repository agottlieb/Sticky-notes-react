import React from "react";

var Note = () => (
  <li className="note">
    <input type="text" placeholder="Title" className="note__title" />
    <textarea placeholder="Description..." className="note__description" />
    <span className="note__delete">X</span>
  </li>
);

export default Note;
