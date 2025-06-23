// lib/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// ✅ Replace these values with your Firebase config from the Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSyAWdIAHX9cxlvmWW28Kfe0TBNm1wmGhKng",
  authDomain: "smartgroceryapp-6e3e0.firebaseapp.com",
  projectId: "smartgroceryapp-6e3e0",
  storageBucket: "smartgroceryapp-6e3e0.firebasestorage.app",
  messagingSenderId: "620924042738",
  appId: "1:620924042738:web:417c7e676177eead9aff6b"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
