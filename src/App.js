import React, { Component } from "react";
import Header from "./Header.js";
import NotesList from "./NotesList.js";

/* This container component manages all of the state 
for this application, delegating rendering logic to 
presentational components. */
class App extends Component {
  state = {
    notes: [],
    searchText: ""
  };
  addNote = () => {
    var newNote = {
      id: Date.now(),
      title: "",
      description: "",
      doesMatchSearch: true
    };
    var newNotes = [newNote, ...this.state.notes];
    this.setState({ notes: newNotes });
  };
  onType = (editMeId, updatedKey, updatedValue) => {
    /* event handler to update text fields in sticky notes
      - editMeId: the id of the note that the user typed in
      - updatedKey: which field was edited? 'title' or 'description'
      - updatedValue: new value of edited field */
    var updateIdMatch = (note) => {
      if (note.id !== editMeId) {
        return note;
      } else {
        if (updatedKey === "title") {
          return {
            ...note,
            title: updatedValue
          };
        } else {
          return {
            ...note,
            description: updatedValue
          };
        }
      }
    };
    var updatedNotes = this.state.notes.map(updateIdMatch);
    this.setState({ notes: updatedNotes });
  };
  //method to search for matches in the sticky notes
  onSearch = (e) => {
    //sets the typed words in search box to lowercase
    var searchText = e.target.value.toLowerCase();
    //mapping function to get access to all the notes
    var updatedNotes = this.state.notes.map((note) => {
      //when searchText is empty, leave up the notes/doesMatchSearch is true
      if (!searchText) {
        return {
          ...note,
          doesMatchSearch: true
        };
        //otherwise, here's how we find titles and descr. that match
      } else {
        //set the font to lowercase in title and descr.
        var title = note.title.toLowerCase();
        var description = note.description.toLowerCase();
        //it's a match when it includes characters from searchText
        var titleMatch = title.includes(searchText);
        var descriptionMatch = description.includes(searchText);
        //can match the title or the description
        var hasMatch = titleMatch || descriptionMatch;
        //returns the entire note when it has either category
        return {
          ...note,
          doesMatchSearch: hasMatch
        };
      }
    });
    this.setState({
      searchText: searchText,
      notes: updatedNotes
    });
  };
  render() {
    return (
      <div>
        <Header
          searchText={this.state.searchText}
          addNote={this.addNote}
          onSearch={this.onSearch}
        />
        <NotesList notes={this.state.notes} onType={this.onType} />
      </div>
    );
  }
}

export default App;
