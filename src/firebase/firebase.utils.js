import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCrhvAQBMqczGPgk4EZlZuqU-sQCHzFHfI",
  authDomain: "crwn-db-158a4.firebaseapp.com",
  databaseURL: "https://crwn-db-158a4.firebaseio.com",
  projectId: "crwn-db-158a4",
  storageBucket: "crwn-db-158a4.appspot.com",
  messagingSenderId: "639693902226",
  appId: "1:639693902226:web:3f8398a8d21a3dbb78314b",
  measurementId: "G-HN6GWGSTFN"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
