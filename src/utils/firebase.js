// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYcuvao5n1NFa_562udG0xdu52u0pUUi0",
  authDomain: "netflixgpt-2ab8c.firebaseapp.com",
  projectId: "netflixgpt-2ab8c",
  storageBucket: "netflixgpt-2ab8c.appspot.com",
  messagingSenderId: "242859699938",
  appId: "1:242859699938:web:753143b4cd73b8a979f8bb",
  measurementId: "G-59FJJPKJ8N",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
