// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBZFrw9pBs3SrZiIqDngzlnInnoIhbxaQ",
  authDomain: "projectsetup-53159.firebaseapp.com",
  projectId: "projectsetup-53159",
  storageBucket: "projectsetup-53159.firebasestorage.app",
  messagingSenderId: "501249398051",
  appId: "1:501249398051:web:556957a9651ed7e725a896",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
