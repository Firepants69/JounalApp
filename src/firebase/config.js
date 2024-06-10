// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQkZ1aqhv_NENiSciS4nzrC42J23ggWj8",
  authDomain: "react-cursos-925ca.firebaseapp.com",
  projectId: "react-cursos-925ca",
  storageBucket: "react-cursos-925ca.appspot.com",
  messagingSenderId: "1079996111466",
  appId: "1:1079996111466:web:4190f404e7230996e58813",
  measurementId: "G-XP9LZG9YZP"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(FirebaseApp);
export const FirebaseAuth = getAuth( FirebaseApp );
export const firebaseDB = getFirestore(FirebaseApp);