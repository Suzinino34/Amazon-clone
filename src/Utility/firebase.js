import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth'; // If you're using Firebase Auth

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLV0kO_D9B3Hb8SWd6oN1l5ZWRWIOLPpE",
  authDomain: "clone-6ad25.firebaseapp.com",
  projectId: "clone-6ad25",
  storageBucket: "clone-6ad25.firebasestorage.app",
  messagingSenderId: "431588448911",
  appId: "1:431588448911:web:93e3795edd738d9e1c6efa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Auth
const db = getFirestore(app);
const auth = getAuth(app); // If you're using Firebase Auth

// Export the Firestore and Auth instances
export { db, auth };
