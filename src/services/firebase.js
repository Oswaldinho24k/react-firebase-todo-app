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
export const saveTodo = (todo) => {
  const id = todo.id || firestore.collection("todos").doc().id;
  console.log(todo);
  return firestore
    .collection("todos")
    .doc(id)
    .set({ ...todo, id })
    .then((d) => {})
    .catch((e) => console.log(e));
};

export const deleteTodo = (todo) => {
  return firestore
    .collection("todos")
    .doc(todo.id)
    .delete(todo)
    .then((doc) => {})
    .catch((e) => console.log(e));
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
    })
    .catch((e) => console.log(e));
};
