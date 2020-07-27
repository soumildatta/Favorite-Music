import React, { Component } from "react";

import "./styles/search.css";
import SearchIcon from "./img/search.svg";

class Search extends Component {
  render() {
    return (
      <form className="form-inline d-flex justify-content-center md-form form-sm pb-2">
        <div class="p-1 bg-light rounded rounded-pill shadow-sm mb-4">
          <div class="input-group">
            <input
              onChange={(e) => this.props.search(e)}
              type="search"
              placeholder="Search artist or song..."
              aria-describedby="button-addon1"
              class="form-control border-0 bg-light ml-1"
            />
            <div class="input-group-append mx-2 search-icon">
              <img src={SearchIcon} alt="Search icon"></img>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default Search;
