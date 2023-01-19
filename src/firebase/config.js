
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyBA4V6I4R7KQTfD8cxBb_fiNLErKXDVev0",
    authDomain: "ecommerce-rl4-616ed.firebaseapp.com",
    projectId: "ecommerce-rl4-616ed",
    storageBucket: "ecommerce-rl4-616ed.appspot.com",
    messagingSenderId: "47325253986",
    appId: "1:47325253986:web:93d256d6e908f0cd6e1c3b"
  };

export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);