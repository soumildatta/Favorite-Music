import React, { Component } from "react";
import SearchIcon from "./search.svg";
import "./styles/search.css";

class Search extends Component {
  render() {
    return (
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
    );
  }
}

export default Search;
