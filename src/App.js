import React, { Component } from "react";
import Header from "./Header.js";
import NoteList from "./NotesList.js";

/*Below is the container component to manage state 
for entire app. Rendering is passed to presentational comps. */
class App extends Component {
  state = {
    notes: [
      {
        id: 0,
        title: "drink",
        description: "cool refreshing water",
        doesMatchSearch: true
      },
      {
        id: 1,
        title: "listen",
        description: "all the podcasts",
        doesMatchSearch: true
      },
      {
        id: 2,
        title: "code",
        description: "build an awesome ui",
        doesMatchSearch: true
      }
    ],
    searchText: "find me"
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
  /*  addNote = () => {
    var newNote = {
      id: Date.now(),
      title: "",
      description: "",
      doesMatchSearch: true
    };
    var newNotes = [newNote, ...this.state.notes];
    this.setState({ notes: newNotes });
  };
*/
  render() {
    return (
      <div>
        <Header searchText={this.state.searchText} />
        <NoteList notes={this.state.notes} />
      </div>
    );
  }
}
export default App;
