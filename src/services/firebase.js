import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// Initialize Firebase
// use ENVS
const firebaseConfig = {
  apiKey: process.env.REACT_API_KEY,
  authDomain: process.env.REACT_AUTH_DOMAIN,
  projectId: process.env.REACT_PROJECT_ID,
  storageBucket: process.env.REACT_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_ID,
};
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

//create Todo
export const saveTodo = (todo) => {
  const id = todo.id || firestore.collection("todos").doc().id;
  const todoObject = { ...todo, id };
  return firestore
    .collection("todos")
    .doc(id)
    .set(todoObject)
    .then(() => todoObject)
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
