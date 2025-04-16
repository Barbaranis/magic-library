// Import des services Firebase (via ES6 modules)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";


// Configuration de ton projet Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCM_pe13PyZ_VO3niNX4IlR0GS35xgMLBM",
  authDomain: "magiclibrary-b623b.firebaseapp.com",
  projectId: "magiclibrary-b623b",
  storageBucket: "magiclibrary-b623b.appspot.com",
  messagingSenderId: "577511993268",
  appId: "1:577511993268:web:e8aaea3888b99474ab4ce1",
  measurementId: "G-PTSDF7C0YT"
};


// Initialisation de l'application Firebase
const app = initializeApp(firebaseConfig);


// Services disponibles dans tout ton projet
export const auth = getAuth(app);
export const db = getFirestore(app);
 


