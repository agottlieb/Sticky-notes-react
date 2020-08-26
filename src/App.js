import React from "react";

var App = () => (
  <div>
    <header className="app-header">
      <h1 className="app-header__title">Super Sticky Notes</h1>
      <aside className="app-header__controls">
        <button className="add-new">+ New Note</button>
        <input
          type="text"
          placeholder="Type here to search..."
          className="search"
        />
      </aside>
    </header>
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
