// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAY0ujqVJlGMOTnj-XHn7OUhc5KNuTVTus",
  authDomain: "vivaai.firebaseapp.com",
  projectId: "vivaai",
  storageBucket: "vivaai.appspot.com",
  messagingSenderId: "612613599456",
  appId: "1:612613599456:web:235fc3cf62899a8ba72085",
  measurementId: "G-F7CWPCQMKE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };