import React, { Component } from "react";
import "./App.css";
// import NewLiker from "./components/newLiker";
import SearchIcon from "./search.svg";
import SongInfo from "./components/songInfo";
import firebase from "./config/fbConfig";

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

          <form className="form-inline d-flex justify-content-center md-form form-sm pb-5">
            <div className="searchbar">
              <input
                className="search_input"
                type="text"
                name=""
                placeholder="Search song or artist"
              />
              <a href="#" className="search_icon">
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
