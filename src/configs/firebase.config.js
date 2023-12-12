// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPWGL9n0OiK4lZmu31-AK4x0Wh4G3FSCc",
  authDomain: "foysal-rahman.firebaseapp.com",
  projectId: "foysal-rahman",
  storageBucket: "foysal-rahman.appspot.com",
  messagingSenderId: "332149281817",
  appId: "1:332149281817:web:5cf6333d49469d9ac30688",
  measurementId: "G-3YJX98RLXP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);