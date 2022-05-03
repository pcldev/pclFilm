// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "pclfilm.firebaseapp.com",
  projectId: "pclfilm",
  storageBucket: "pclfilm.appspot.com",
  messagingSenderId: process.env.REACT_APP_MESSENDERID,
  appId: process.env.REACT_APP_APP_ID,
});

const db = firebaseConfig.firestore();
const auth = firebase.auth();

export { db, auth };
