import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

export const config = {
  apiKey: "AIzaSyAaJRfgtMU3LqvV07NyiaGfqUj_XGpkoNo",
  authDomain: "eatout-faae0.firebaseapp.com",
  databaseURL: "https://eatout-faae0.firebaseio.com",
  projectId: "eatout-faae0",
  storageBucket: "eatout-faae0.appspot.com",
  messagingSenderId: "734346628660"
};

firebase.initializeApp(config);
let storage = firebase.storage();

// let db = firebase.firestore();

export default storage;
