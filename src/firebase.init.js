// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJL69vhtpNa4GSeKP0QXWrFWGBPOakKWU",
  authDomain: "learnpick-d5bf3.firebaseapp.com",
  projectId: "learnpick-d5bf3",
  storageBucket: "learnpick-d5bf3.appspot.com",
  messagingSenderId: "293455520534",
  appId: "1:293455520534:web:9a18a0892e993c8a1ba637"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;