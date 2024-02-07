// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBm1s51fwtA2C5Jiltev5qCxfKpivmf0TI",
    authDomain: "maq-ar.firebaseapp.com",
    projectId: "maq-ar",
    storageBucket: "maq-ar.appspot.com",
    messagingSenderId: "1086618189861",
    appId: "1:1086618189861:web:b801c2971eb831078abfcc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore(app);