import React, { Component } from "react";
import "./styles/songInfo.css";
import Liker from "./liker";

class songInfo extends Component {
  render() {
    const { songs } = this.props;
    const songList = songs.map((song) => {
      return (
        <div className="card">
          <div className="card-body">
            <div className="d-flex flex-row">
              <img src={song.cover} alt="abba art" className="cover-art" />
              <div className="flex-grow-1 text-justify song-info">
                <h4 className="card-title">{song.name}</h4>
                <h5 className="card-subtitle mb-2 text-muted">{song.artist}</h5>
              </div>
              <Liker />
            </div>
          </div>
        </div>
      );
    });

    return <div className="song-list">{songList}</div>;
  }
}

export default songInfo;
