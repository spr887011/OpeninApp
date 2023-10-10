import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider , getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDuoRbEOp9PMnh0ls7ijq8xn1LtIRJjArQ",
  authDomain: "openinapp-7ce8e.firebaseapp.com",
  projectId: "openinapp-7ce8e",
  storageBucket: "openinapp-7ce8e.appspot.com",
  messagingSenderId: "878982591615",
  appId: "1:878982591615:web:5ec0ef312b8fbbdecafb4a",
  measurementId: "G-ZXRE233GZ3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
// const appleProvider = new AppleAuthProvider();

export {auth, googleProvider}