// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSLrSsxpMDFq7_xADx57SK4B5zgkCpmoE",
  authDomain: "webkert-nyari-tabor-foglalo.firebaseapp.com",
  projectId: "webkert-nyari-tabor-foglalo",
  storageBucket: "webkert-nyari-tabor-foglalo.firebasestorage.app",
  messagingSenderId: "595746910150",
  appId: "1:595746910150:web:e8edc2ad6fd49d4b594cc7",
  measurementId: "G-2DV7GR8V8F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);