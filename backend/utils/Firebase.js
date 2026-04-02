// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5UHBGYB_48kLQZNwp-W37JMIIgu6Cevo",
  authDomain: "ahaarmitra-cf965.firebaseapp.com",
  projectId: "ahaarmitra-cf965",
  storageBucket: "ahaarmitra-cf965.firebasestorage.app",
  messagingSenderId: "360357141240",
  appId: "1:360357141240:web:199e5475838d2e6742790d",
  measurementId: "G-PRSZP2RMN6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);