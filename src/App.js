import React, { Component } from "react";
import "./App.css";
// import NewLiker from "./components/newLiker";
import SearchIcon from "./search.svg";
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
      {
        name: "Rocketman",
        artist: "Elton John",
        likes: 14,
        cover:
          "https://www.udiscovermusic.com/wp-content/uploads/2018/07/Elton-John-Honky-Chateau-Album-Cover-web-optimised-820.jpg",
        id: 2,
      },
      {
        name: "Rocketman",
        artist: "Elton John",
        likes: 14,
        cover:
          "https://www.udiscovermusic.com/wp-content/uploads/2018/07/Elton-John-Honky-Chateau-Album-Cover-web-optimised-820.jpg",
        id: 2,
      },
      {
        name: "Rocketman",
        artist: "Elton John",
        likes: 14,
        cover:
          "https://www.udiscovermusic.com/wp-content/uploads/2018/07/Elton-John-Honky-Chateau-Album-Cover-web-optimised-820.jpg",
        id: 2,
      },
      {
        name: "Rocketman",
        artist: "Elton John",
        likes: 14,
        cover:
          "https://www.udiscovermusic.com/wp-content/uploads/2018/07/Elton-John-Honky-Chateau-Album-Cover-web-optimised-820.jpg",
        id: 2,
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
        <div className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1>Soumil's Favorite Songs</h1>
          <p>
            This is a list of my current favorite songs. In case youre curious
            if I like a certain song, use the search bar below. Leave a like on
            songs to let me know you like them too! You can also see the total
            number of people that have liked the song :)
          </p>

          <form className="form-inline d-flex justify-content-center md-form form-sm pb-5">
            <div class="searchbar">
              <input
                class="search_input"
                type="text"
                name=""
                placeholder="Search song or artist"
              />
              <a href="#" class="search_icon">
                <img src={SearchIcon} alt="Search icon"></img>
              </a>
            </div>
          </form>
          <div className="song-cards">
            <SongInfo className="songs" songs={this.state.songs} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
