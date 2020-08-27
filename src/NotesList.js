import React from "react";
import Note from "./Note.js";

const renderNote = (note) => <Note note={note} key={note.id} />;

var NotesList = (props) => {
  var noteElements = props.notes.map(renderNote);
  return <ul className="notes-list">{noteElements} </ul>;
};

export default NotesList;
