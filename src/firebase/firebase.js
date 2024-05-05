// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfmXDmV-EiWlDq6lDnPLhzTKDTMu5_Cz0",
  authDomain: "cosmiclens-ab016.firebaseapp.com",
  projectId: "cosmiclens-ab016",
  storageBucket: "cosmiclens-ab016.appspot.com",
  messagingSenderId: "857969806928",
  appId: "1:857969806928:web:1854866a950563e695cb55",
  measurementId: "G-JY3NJ85SQ5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export {app, auth}