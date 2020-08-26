import React from "react";
import Header from "./Header.js";

var App = () => (
  <div>
    <Header />

    <ul className="notes-list">
      <li className="note">
        <input type="text" placeholder="Title" className="note__title" />
        <textarea placeholder="Description..." className="note__description" />
        <span className="note__delete">X</span>
      </li>
      <li className="note">
        <input type="text" placeholder="Title" className="note__title" />
        <textarea placeholder="Description..." className="note__description" />
        <span className="note__delete">X</span>
      </li>
      <li className="note">
        <input type="text" placeholder="Title" className="note__title" />
        <textarea placeholder="Description..." className="note__description" />
        <span className="note__delete">X</span>
      </li>
    </ul>
  </div>
);

export default App;
