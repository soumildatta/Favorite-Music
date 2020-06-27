import React, { Component } from "react";
import "./styles/songInfo.css";
import Liker from "./liker";

class songInfo extends Component {
  render() {
    const { songs } = this.props;
    const songList = songs.map((song) => {
      return (
        <div key={song.id} className="card">
          <div className="card-body">
            <div className="d-flex flex-row">
              <img src={song.cover} alt="abba art" className="cover-art" />
              <div className="flex-grow-1 text-justify song-info">
                <h5 className="card-title">{song.name}</h5>
                <h6 className="card-subtitle text-muted">{song.artist}</h6>
              </div>
              <Liker likes={song.likes} name={song.name} />
            </div>
          </div>
        </div>
      );
    });

    return <div className="song-list">{songList}</div>;
  }
}

export default songInfo;
