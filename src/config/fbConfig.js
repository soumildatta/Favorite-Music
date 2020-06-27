import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyDMbLY91aJKM9mnq2zMLhAsKy_-f8rVXRs",
  authDomain: "favorite-music-678e1.firebaseapp.com",
  databaseURL: "https://favorite-music-678e1.firebaseio.com",
  projectId: "favorite-music-678e1",
  storageBucket: "favorite-music-678e1.appspot.com",
  messagingSenderId: "619773047361",
  appId: "1:619773047361:web:17d158d44961a87a4b0cc0",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
