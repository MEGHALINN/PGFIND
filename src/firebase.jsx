// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGwyDL2nd3pxWoYsztasUMLL1IsKn4CT0",
  authDomain: "pgfind-f9d4d.firebaseapp.com",
  projectId: "pgfind-f9d4d",
  storageBucket: "pgfind-f9d4d.appspot.com",
  messagingSenderId: "1016524575891",
  appId: "1:1016524575891:web:3e2a6942b00e9c35376966",
  measurementId: "G-P05552CQ4T"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getFirestore(app);
export const storage = getStorage(app);
export const db = getDatabase();
