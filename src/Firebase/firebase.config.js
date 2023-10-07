// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQhg0x_jy9jWqsMzVkabMA5tgr5Xc57G0",
  authDomain: "fir-auth-project-902d1.firebaseapp.com",
  projectId: "fir-auth-project-902d1",
  storageBucket: "fir-auth-project-902d1.appspot.com",
  messagingSenderId: "411203349082",
  appId: "1:411203349082:web:9f3b6fd622d35b831b8663"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;