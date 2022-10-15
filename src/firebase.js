import firebase from "firebase/compat/app";
import { initializeApp } from "firebase/app";
// import firebase from "firebase";
import "firebase/compat/auth";
import "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBpzNSfCWFJChugEaAnTKu-4iBenhRi77E",
  authDomain: "frontend-assignment-3b775.firebaseapp.com",
  projectId: "frontend-assignment-3b775",
  storageBucket: "frontend-assignment-3b775.appspot.com",
  messagingSenderId: "966992076851",
  appId: "1:966992076851:web:39b679d017c9598ce40346",
};

firebase.initializeApp(firebaseConfig);
export default firebase;
