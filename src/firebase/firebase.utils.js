import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCBKViDhikFC8wWCKGNvEjwhZdsfIAcJTk",
  authDomain: "crwn-db-b178e.firebaseapp.com",
  databaseURL: "https://crwn-db-b178e.firebaseio.com",
  projectId: "crwn-db-b178e",
  storageBucket: "crwn-db-b178e.appspot.com",
  messagingSenderId: "715818975159",
  appId: "1:715818975159:web:341fcbf81646b60721f232",
  measurementId: "G-R6CM2GKWRN"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
