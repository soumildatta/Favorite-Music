import React, { Component } from "react";
import heart from "../heart.svg";
import emptyHeart from "../EmptyHeart.svg";
import "./styles/liker.css";
import firebase from "../config/fbConfig";

class Liker extends Component {
  state = {
    count: this.props.likes,
    click: 0,
    logo: heart,
  };

  handleIncrement = () => {
    const { click } = this.state;
    const { count } = this.state;
    if (click < 1) {
      this.setState({
        click: click + 1,
        count: count + 1,
      });
    } else {
      this.setState({
        click: click - 1,
        count: count - 1,
      });
    }

    this.testing();
  };

  testing = () => {
    firebase.firestore().collection("songs").doc(this.props.name).set(
      {
        likes: 12,
      },
      { merge: true }
    );
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
    return this.state.click === 0 ? heart : emptyHeart;
  }
}

export default Liker;
