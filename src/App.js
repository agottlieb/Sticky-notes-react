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
    searchText: "search for me"
  };
  render() {
    return (
      <div>
        <Header />
        <NoteList />
      </div>
    );
  }
}
export default App;
