import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// Initialize Firebase
// use ENVS
const config = {
  apiKey: "AIzaSyB-yUmhqRgvAvuyJvLGYuSRM7y6GnSqVOA",
  authDomain: "oswaldinho-demos.firebaseapp.com",
  databaseURL: "https://oswaldinho-demos.firebaseio.com",
  projectId: "oswaldinho-demos",
  storageBucket: "oswaldinho-demos.appspot.com",
  messagingSenderId: "933598744807",
  appId: "1:933598744807:web:6b4d5148f2263f191c9242",
  measurementId: "G-R0LVJMXX6H",
};
firebase.initializeApp(config);

export const firestore = firebase.firestore();

//create Todo
export const createTodo = (todo) => {
  return firestore
    .collection("todos")
    .add(todo)
    .then((doc) => {
      console.log(doc);
    });
};

//gmail Login
export const gmailLogin = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase
    .auth()
    .signInWithPopup(provider)
    .then((res) => {
      localStorage.setItem("user", JSON.stringify(res.user));
      return res.user;
    });
};
