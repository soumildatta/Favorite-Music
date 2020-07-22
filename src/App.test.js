import React from "react";
import ReactDom from "react-dom";
import Liker from "./components/liker";
import Search from "./components/search";
import SongInfo from "./components/songInfo";

import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup);
// it = component
// test if component renders
it("Liker renders", () => {
  const div = document.createElement("div");
  ReactDom.render(<Liker></Liker>, div);
});
it("Search renders", () => {
  const div = document.createElement("div");
  ReactDom.render(<Search></Search>, div);
});
it("Song info renders", () => {
  const div = document.createElement("div");
  const songs = [
    {
      id: 1,
      name: "song1",
      artist: "artist1",
      cover: "someimage",
      link: "something",
      likes: 20,
    },
  ];
  ReactDom.render(<SongInfo songs={songs}></SongInfo>, div);
});

it("Song info renders correctly", () => {
  const songs = [
    {
      id: 1,
      name: "song1",
      artist: "artist1",
      cover: "someimage",
      link: "something",
      likes: 20,
    },
  ];
  const { getByTestId } = render(<SongInfo songs={songs}></SongInfo>);
  expect(getByTestId("song-name")).toHaveTextContent("song1");
  expect(getByTestId("song-artist")).toHaveTextContent("artist1");
});
it("Liker renders correctly", () => {
  const { getByTestId } = render(<Liker></Liker>);
  expect(getByTestId("like-count")).toHaveTextContent("");
});
