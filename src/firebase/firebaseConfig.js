// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD17UwRi9zOMW6hkYgqawU0dZkx1lm5IOk",
  authDomain: "barbershop-dd26a.firebaseapp.com",
  projectId: "barbershop-dd26a",
  storageBucket: "barbershop-dd26a.firebasestorage.app",
  messagingSenderId: "651782232869",
  appId: "1:651782232869:web:84d9b6bcbe73bb25d9d8cc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)