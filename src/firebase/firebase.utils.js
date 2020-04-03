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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
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
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
