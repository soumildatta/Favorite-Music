import React, { Component } from "react";
import heart from "../heart.svg";
import emptyHeart from "../EmptyHeart.svg";
import "./styles/liker.css";
import firebase from "../config/fbConfig";

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
        // likes: likes + 1,
      });
      this.testing(1, this.props.likes);
    } else {
      this.setState({
        click: click - 1,
        // likes: likes - 1,
      });
      this.testing(0, this.props.likes);
    }
  };

  testing(incOrDec, likes) {
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

  formatHeart() {
    return this.state.click === 0 ? heart : emptyHeart;
  }
}

export default Liker;
