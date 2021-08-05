import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// Initialize Firebase
// use ENVS
const firebaseConfig = {
  apiKey: "AIzaSyBfDSYHl2GxahwUKvEBdlsyF19fcycptsg",
  authDomain: "oswaldinho-demos-657b9.firebaseapp.com",
  projectId: "oswaldinho-demos-657b9",
  storageBucket: "oswaldinho-demos-657b9.appspot.com",
  messagingSenderId: "135802538376",
  appId: "1:135802538376:web:ea43c30b2fccf98ff4d23d",
};
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

//create Todo
export const saveTodo = (todo) => {
  const id = todo.id || firestore.collection("todos").doc().id;
  return firestore
    .collection("todos")
    .doc(id)
    .set({ ...todo, id })
    .then((doc) => {})
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
