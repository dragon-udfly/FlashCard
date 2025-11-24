// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvq7TTzTUMY_erubN9XREZsL2BxBtACLc",
  authDomain: "firstproject-4f886.firebaseapp.com",
  projectId: "firstproject-4f886",
  storageBucket: "firstproject-4f886.firebasestorage.app",
  messagingSenderId: "39854820241",
  appId: "1:39854820241:web:356c51875277b3e5eae830",
  measurementId: "G-YCHC4GRCWB"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth };
export default app;