import React from "react";

var Header = () => (
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
);

export default Header;
