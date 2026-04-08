// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDLoE4SEfVi6bLiUZfboCM52q6PEz8LPsQ",
  authDomain: "pet-care-web-7205d.firebaseapp.com",
  projectId: "pet-care-web-7205d",
  storageBucket: "pet-care-web-7205d.firebasestorage.app",
  messagingSenderId: "918829754217",
  appId: "1:918829754217:web:bc6799813e351b0966bff8",
  measurementId: "G-VDT5ZP1RC1",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);