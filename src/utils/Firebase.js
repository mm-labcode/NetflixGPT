// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYSOKfBx1I6gd_m5A6h2DnroLfKxMTuZw",
  authDomain: "netflixgpt-e7568.firebaseapp.com",
  projectId: "netflixgpt-e7568",
  storageBucket: "netflixgpt-e7568.appspot.com",
  messagingSenderId: "119041641160",
  appId: "1:119041641160:web:044be77c56927d6808b3fd",
  measurementId: "G-8KD9PGFY79"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();