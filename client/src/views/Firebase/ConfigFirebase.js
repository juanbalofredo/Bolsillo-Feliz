import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyClAR60QNv1HSAY2pIu7i5ZmSO8jYDK1Hg",
    authDomain: "bolsillo-feliz.firebaseapp.com",
    projectId: "bolsillo-feliz",
    storageBucket: "bolsillo-feliz.appspot.com",
    messagingSenderId: "8723661933",
    appId: "1:8723661933:web:53f00ef03cbf075ee86b64",
    measurementId: "G-W55TQMWWBZ"
  };
  // Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
const db = fb.firestore();
const auth = firebase.auth();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export {auth, googleAuthProvider, db, firebase};