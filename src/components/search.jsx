import React, { Component } from "react";

import "./styles/search.css";
import SearchIcon from "./img/search.svg";

class Search extends Component {
  render() {
    return (
      <form className="form-inline d-flex justify-content-center md-form form-sm pb-5">
        <div className="searchbar">
          <input
            onChange={(e) => this.props.search(e)}
            className="search_input"
            type="text"
            name=""
            placeholder="Search song or artist"
          />
          <div className="search_icon">
            <img src={SearchIcon} alt="Search icon"></img>
          </div>
        </div>
      </form>
    );
  }
}

export default Search;
