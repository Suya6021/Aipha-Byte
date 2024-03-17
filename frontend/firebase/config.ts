// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcdSWumPwpfKv35H-pfC9MZcnb3ejKPIA",
  authDomain: "alpha-byte-f7b96.firebaseapp.com",
  projectId: "alpha-byte-f7b96",
  storageBucket: "alpha-byte-f7b96.appspot.com",
  messagingSenderId: "257376705941",
  appId: "1:257376705941:web:01c13ecf67f9cef01aea9c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
