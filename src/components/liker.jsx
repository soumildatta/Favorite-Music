import React, { Component } from "react";
import heart from "../heart.svg";
import emptyHeart from "../EmptyHeart.svg";
import "./styles/liker.css";

class Liker extends Component {
  state = {
    count: 0,
    logo: heart,
  };

  // arrow function because it can reference this by default
  handleIncrement = () => {
    // you cannot modify state directly
    //  have to use react setState
    if (this.state.count < 1) {
      this.setState({ count: this.state.count + 1 });
    } else {
      this.setState({ count: this.state.count - 1 });
    }
  };

  render() {
    return (
      <div className="text-center liker-items">
        <img
          className="like-button"
          onClick={this.handleIncrement}
          src={this.formatHeart()}
          alt="like button"
        />
        <h6>{this.state.count}</h6>
      </div>
    );
  }

  formatHeart() {
    return this.state.count === 0 ? heart : emptyHeart;
  }
}

export default Liker;
