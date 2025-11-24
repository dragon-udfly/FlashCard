// firebaseconfig.ts

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// Import other services you plan to use, e.g.,
// import { getFirestore } from 'firebase/firestore'; 
// import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
// IMPORTANT: Replace these placeholders with your actual project credentials
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  // measurementId: "YOUR_MEASUREMENT_ID" // optional
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services you need
export const auth = getAuth(app);
// export const db = getFirestore(app); // For Firestore database
// export const storage = getStorage(app); // For Storage

// You can export the app instance if needed elsewhere
export default app;