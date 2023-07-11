// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALbsLtAfJxrn4wyu_dPf5EebKuYhaanD4",
  authDomain: "appsweb-76f24.firebaseapp.com",
  projectId: "appsweb-76f24",
  storageBucket: "appsweb-76f24.appspot.com",
  messagingSenderId: "834968675412",
  appId: "1:834968675412:web:6f76ebe302a9f4c11439c1",
  measurementId: "G-P84JMYZ2FL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);``