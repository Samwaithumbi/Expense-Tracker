import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyASwILMeuerFkcbiX60BQu1vu5kU6vd4mA",
  authDomain: "budget-tracker-b1d10.firebaseapp.com",
  projectId: "budget-tracker-b1d10",
  storageBucket: "budget-tracker-b1d10.firebasestorage.app",
  messagingSenderId: "288174069711",
  appId: "1:288174069711:web:e7c4b2ae9c8a2cb3a9a4ba",
  measurementId: "G-R9LB9QCB76"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
const provider=new GoogleAuthProvider()
const db = getFirestore(app);

export{auth, provider, db}
