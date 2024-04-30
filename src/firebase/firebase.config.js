// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: "AIzaSyACllTh1oWrRXKdWOSwsoknyEbVmx2bB7o",
  // authDomain: "assignment-72f2a.firebaseapp.com",
  // projectId: "assignment-72f2a",
  // storageBucket: "assignment-72f2a.appspot.com",
  // messagingSenderId: "885165195203",
  // appId: "1:885165195203:web:d6dc73486bce8ce6e68776"

  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID,

  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;