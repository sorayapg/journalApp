// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-0xx_Kv5VIY1kCY749g_yrNqK2yFsAio",
  authDomain: "react-cursos-40001.firebaseapp.com",
  projectId: "react-cursos-40001",
  storageBucket: "react-cursos-40001.appspot.com",
  messagingSenderId: "590242697599",
  appId: "1:590242697599:web:229b565388769bdf834a4a"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );