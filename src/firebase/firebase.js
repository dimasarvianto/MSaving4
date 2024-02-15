// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXwrYiwiu5YIANA1t69vczKPZR5anVpFE",
  authDomain: "msaving-b83df.firebaseapp.com",
  projectId: "msaving-b83df",
  storageBucket: "msaving-b83df.appspot.com",
  messagingSenderId: "699836882089",
  appId: "1:699836882089:web:ebd9b72b24836631985db8",
  measurementId: "G-HBZNJETM6Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
// const analytics = getAnalytics(app);