import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDe5OHdFMCrdKwyrG7yoniILzhLIE0ebmM",
  authDomain: "ninja-firegram-5de56.firebaseapp.com",
  projectId: "ninja-firegram-5de56",
  storageBucket: "ninja-firegram-5de56.appspot.com",
  messagingSenderId: "600695980741",
  appId: "1:600695980741:web:89f898562fc1f9584be6ac",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
