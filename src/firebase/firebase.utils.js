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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  } else {
    console.log("user already exists");
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
