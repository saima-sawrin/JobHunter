// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4FXOY4LM5MW07vW4c0y8jdhgqVk2sgmM",
  authDomain: "job-hunter-d54ed.firebaseapp.com",
  projectId: "job-hunter-d54ed",
  storageBucket: "job-hunter-d54ed.appspot.com",
  messagingSenderId: "510554893462",
  appId: "1:510554893462:web:30ba29ab39d0e24457a6b7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;