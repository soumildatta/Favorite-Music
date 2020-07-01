import React, { Component } from "react";
import firebase from "../config/fbConfig";

import "./styles/liker.css";

import heart from "./img/heart.svg";
import emptyHeart from "./img/emptyHeart.svg";

class Liker extends Component {
  state = {
    click: 0,
    logo: heart,
  };

  handleIncrement = () => {
    const { click } = this.state;

    if (click < 1) {
      this.setState({
        click: click + 1,
      });
      this.updateFirestoreLikes(1, this.props.likes);
    } else {
      this.setState({
        click: click - 1,
      });
      this.updateFirestoreLikes(0, this.props.likes);
    }
  };

  updateFirestoreLikes(incOrDec, likes) {
    // 1 = liked, 0 = unliked
    if (incOrDec === 1) {
      firebase
        .firestore()
        .collection("songs")
        .doc(this.props.name)
        .set(
          {
            likes: likes + 1,
          },
          { merge: true }
        );
    } else {
      firebase
        .firestore()
        .collection("songs")
        .doc(this.props.name)
        .set(
          {
            likes: likes - 1,
          },
          { merge: true }
        );
    }
  }

  formatHeart() {
    return this.state.click === 0 ? heart : emptyHeart;
  }

  render() {
    return (
      <div className="text-center liker-items">
        <img
          className="like-button"
          onClick={this.handleIncrement}
          src={this.formatHeart()}
          alt="like button"
        />
        <h6>{this.props.likes}</h6>
      </div>
    );
  }
}

export default Liker;
