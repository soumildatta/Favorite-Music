import React, { Component } from "react";
import "./styles/songInfo.css";
import Liker from "./liker";
import Search from "./search";

class songInfo extends Component {
  state = {
    search: null,
  };

  search = (event) => {
    let keyword = event.target.value;
    this.setState({ search: keyword });
  };

  formatList(songList) {
    // return songList;
    var rows = [];
    for (var i = 0; i < songList.length; i += 2) {
      if (i % 2 === 0) {
        rows.push(
          <div key="i" className="card-deck">
            {songList[i]}
            {songList[i + 1]}
          </div>
        );
      }
    }
    return rows;
  }

  render() {
    const { songs } = this.props;
    const songList = songs
      .filter((data) => {
        if (this.state.search == null) return data;
        else if (
          data.artist.toLowerCase().includes(this.state.search.toLowerCase()) ||
          data.name.toLowerCase().includes(this.state.search.toLowerCase())
        ) {
          return data;
        }
      })
      .map((song) => {
        return (
          <div key={song.id} className="card">
            <div className="card-body">
              <div className="d-flex flex-row">
                <img src={song.cover} alt="abba art" className="cover-art" />
                <div className="flex-grow-1 text-justify song-info">
                  <a href={song.link} target="_blank" rel="noopener noreferrer">
                    <h5 className="card-title" data-testid="song-name">
                      {song.name}
                    </h5>
                  </a>
                  <h6
                    className="card-subtitle text-muted"
                    data-testid="song-artist"
                  >
                    {song.artist}
                  </h6>
                </div>
                <Liker likes={song.likes} name={song.name} />
              </div>
            </div>
          </div>
        );
      });
    return (
      <div className="song-list">
        <Search search={this.search} />
        {/* {songList} */}
        {this.formatList(songList)}
      </div>
    );
  }
}

export default songInfo;
