import React, { Component } from "react";
import "./App.css";
// import NewLiker from "./components/newLiker";
import SongInfo from "./components/songInfo";
import firebase from "./config/fbConfig";
// import Search from "./components/search";

class App extends Component {
  state = {
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
        // console.log(snapshot);
      })
      .catch((error) => console.log(error));

    db.collection("songs").onSnapshot((snapshot) => {
      // console.log(snapshot.docChanges());
      let changes = snapshot.docChanges();
      changes.forEach((change) => {
        if (change.type === "modified") {
          // var songs = this.state.songs;
          // const found = this.state.songs.find((obj) => {
          //   return obj.id === change.doc.data().id;
          // });
          // // console.log(found);
          // if (found) {
          //   songs.splice(found, 1);
          //   songs.push(change.doc.data());
          //   console.log(songs);
          //   this.setState({
          //     songs: songs,
          //   });
          // }
        }
      });
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1>Soumil's Favorite Songs</h1>
          <p>
            This is a list of my current favorite songs. In case youre curious
            if I like a certain song, use the search bar below. Leave a like on
            songs to let me know you like them too! You can also see the total
            number of people that have liked the song :)
          </p>

          <div className="song-cards">
            <SongInfo className="songs" songs={this.state.songs} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
