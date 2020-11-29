import React, { Component } from "react";
import firebase from "./config/fbConfig";

import SongInfo from "./components/songInfo";

import "./App.css";

class App extends Component {
  state = {
    // each object contains artist, cover, id, link, likes, name
    songs: [],
  };

  componentDidMount() {
    console.log("mounted");
    const db = firebase.firestore();
    db.collection("songs")
      .get()
      .then((snapshot) => {
        const songs = [];

        snapshot.forEach((doc) => {
          const data = doc.data();
          songs.push(data);
        });

        this.setState({ songs: songs });
      })
      .catch((error) => console.log(error));

    db.collection("songs").onSnapshot((snapshot) => {
      let changes = snapshot.docChanges();

      changes.forEach((change) => {
        if (change.type === "modified") {
          var songs = this.state.songs;

          const changed = songs.find((p) => {
            if (p.id === change.doc.data().id) {
              p.likes = change.doc.data().likes;
              return true;
            }
            return false;
          });

          if (changed) {
            this.setState({
              songs: songs,
            });
          }
        }
      });
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Soumil's Favorite Songs</h1>
          <p>
            Come join me in my journey for discovering cool new songs! You can
            search through my recent favorite songs using the search bar below.
            Let me know which songs you like by leaving a like!
          </p>

          <div className="song-cards">
            <SongInfo className="songs" songs={this.state.songs} />
          </div>

          <footer>Copyright Soumil Datta © {new Date().getFullYear()}</footer>
        </div>
      </div>
    );
  }
}

export default App;
