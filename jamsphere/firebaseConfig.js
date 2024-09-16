// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNWHJSMjVXzsBXXX9LmgnrkZH7USzIUMc",
  authDomain: "jamsphere-af57a.firebaseapp.com",
  projectId: "jamsphere-af57a",
  storageBucket: "jamsphere-af57a.appspot.com",
  messagingSenderId: "834726314752",
  appId: "1:834726314752:web:b605f603f729c5a79ce9e5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth, GoogleAuthProvider, signInWithPopup };
