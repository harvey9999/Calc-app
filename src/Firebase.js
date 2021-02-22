import firebase from 'firebase/app';
import 'firebase/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBJEHX5kHACDz_fXhcUt-lLt48DD_Mx9IQ",
    authDomain: "calc-a5894.firebaseapp.com",
    projectId: "calc-a5894",
    storageBucket: "calc-a5894.appspot.com",
    messagingSenderId: "918364790763",
    appId: "1:918364790763:web:25c2f244696430ceb483ae"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
