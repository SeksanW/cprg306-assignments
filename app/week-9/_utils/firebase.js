
// Part 2: Firebase code starts

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDUhbZCbmOLxuDkaV0dqb8d4LaGvZkmkIM",
    authDomain: "cprg306-assignments-272f3.firebaseapp.com",
    projectId: "cprg306-assignments-272f3",
    storageBucket: "cprg306-assignments-272f3.firebasestorage.app",
    messagingSenderId: "887199980228",
    appId: "1:887199980228:web:3a7dfe278bf1c0c8c1c791"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);