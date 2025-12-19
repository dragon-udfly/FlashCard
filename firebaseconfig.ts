import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 
import { getFirestore } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyCvq7TTzTUMY_erubN9XREZsL2BxBtACLc",
  authDomain: "firstproject-4f886.firebaseapp.com",
  projectId: "firstproject-4f886",
  storageBucket: "firstproject-4f886.firebasestorage.app",
  messagingSenderId: "39854820241",
  appId: "1:39854820241:web:356c51875277b3e5eae830",
  measurementId: "G-YCHC4GRCWB"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const db = getFirestore(app); 

export { auth, db }; 
export default app;