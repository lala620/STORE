// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4jMXqHDnNWPkTIGokv-cQldD9Molb0cA",
  authDomain: "store-da523.firebaseapp.com",
  projectId: "store-da523",
  storageBucket: "store-da523.appspot.com",
  messagingSenderId: "52186491447",
  appId: "1:52186491447:web:f1cd3cdfd305c7ccfd2db2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app)