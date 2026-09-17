// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyCQdmPWhjApNskrWimRDCDuqVNC3FgAu5Y",
  authDomain: "komafes69-96860.firebaseapp.com",
  projectId: "komafes69-96860",
  storageBucket: "komafes69-96860.firebasestorage.app",
  messagingSenderId: "226964262509",
  appId: "1:226964262509:web:e5c5ee3200c4b362d33964",
  measurementId: "G-69HJSSBRMN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);