import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDOXLQMANfqt5ucMxZMMQ7g5fMRWm6sjOQ",
    authDomain: "instagram-clone-react-eb3e4.firebaseapp.com",
    databaseURL: "https://instagram-clone-react-eb3e4.firebaseio.com",
    projectId: "instagram-clone-react-eb3e4",
    storageBucket: "instagram-clone-react-eb3e4.appspot.com",
    messagingSenderId: "828621025205",
    appId: "1:828621025205:web:cdf5b5b59d7106d2ed33fc",
    measurementId: "G-QXLXQLG6TH"
  });

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {db, auth, storage}