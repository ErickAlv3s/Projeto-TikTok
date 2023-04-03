import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyDIgidscUTZa8z2BY1siI0cg6hNCdLRrvA",
  authDomain: "clone-tiktok-c43c6.firebaseapp.com",
  projectId: "clone-tiktok-c43c6",
  storageBucket: "clone-tiktok-c43c6.appspot.com",
  messagingSenderId: "708463648908",
  appId: "1:708463648908:web:bda1026db915390afbdba9",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
