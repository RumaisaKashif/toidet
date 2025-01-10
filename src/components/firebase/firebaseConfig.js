// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAm2rplXj8Uxoj8xM7RPzJRO1aLvo4bZGQ",
  authDomain: "toidet.firebaseapp.com",
  projectId: "toidet",
  storageBucket: "toidet.firebasestorage.app",
  messagingSenderId: "57465849681",
  appId: "1:57465849681:web:c2dcb55b38926c3185b570",
  measurementId: "G-WR7XNE0Z2M"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Initialize Firestore
const analytics = getAnalytics(app);

// Export the Firestore instance
export { db };