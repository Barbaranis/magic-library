// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCM_pe13PyZ_VO3niNX4IlR0GS35xgMLBM",
    authDomain: "magiclibrary-b623b.firebaseapp.com",
    projectId: "magiclibrary-b623b",
    storageBucket: "magiclibrary-b623b.firebasestorage.app",
    messagingSenderId: "577511993268",
    appId: "1:577511993268:web:e8aaea3888b99474ab4ce1",
    measurementId: "G-PTSDF7C0YT"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

