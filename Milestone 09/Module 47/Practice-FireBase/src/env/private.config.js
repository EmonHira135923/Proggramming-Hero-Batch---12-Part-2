// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGYOGP_Gm_Q9EaCKljPgRKOPQpwaOCaPE",
  authDomain: "first-practice-project-afbdd.firebaseapp.com",
  projectId: "first-practice-project-afbdd",
  storageBucket: "first-practice-project-afbdd.firebasestorage.app",
  messagingSenderId: "894588186353",
  appId: "1:894588186353:web:6f5b5e8e69ea71c69e4350",
  measurementId: "G-HNE5R3DT0G",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
