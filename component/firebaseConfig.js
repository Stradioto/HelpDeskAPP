import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

//Firebase configuration, don´t modify except if you know what you are doing.

const firebaseConfig = {
    apiKey: "AIzaSyBtfnWy-8dWMZXEadeNNFx_i5SDV2HhEfQ",
    authDomain: "helpdeskproject-f6600.firebaseapp.com",
    projectId: "helpdeskproject-f6600",
    storageBucket: "helpdeskproject-f6600.appspot.com",
    messagingSenderId: "641829270871",
    appId: "1:641829270871:web:ae504107c6e60cd39a7a12",
    measurementId: "G-FLVX0QDWT5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

const auth = getAuth(app);

export { db, auth };
