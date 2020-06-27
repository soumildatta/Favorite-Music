import React, { Component } from "react";
import "./App.css";
// import NewLiker from "./components/newLiker";
import SongInfo from "./components/songInfo";

class App extends Component {
  state = {
    songs: [
      {
        name: "Super Trouper",
        artist: "ABBA",
        likes: 5,
        cover:
          "https://upload.wikimedia.org/wikipedia/en/1/1c/ABBA_-_Super_Trouper_%28Polar%29.jpg",
        id: 1,
      },
      {
        name: "Rocketman",
        artist: "Elton John",
        likes: 14,
        cover:
          "https://www.udiscovermusic.com/wp-content/uploads/2018/07/Elton-John-Honky-Chateau-Album-Cover-web-optimised-820.jpg",
        id: 2,
      },
    ],
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <SongInfo songs={this.state.songs} />
        </header>
      </div>
    );
  }
}

export default App;
