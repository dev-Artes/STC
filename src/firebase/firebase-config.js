import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCkT7Gd-QWDkeyDRufDep_DpyvWgeS1Ey8",
  authDomain: "stc-artes.firebaseapp.com",
  projectId: "stc-artes",
  storageBucket: "stc-artes.firebasestorage.app",
  messagingSenderId: "957209091389",
  appId: "1:957209091389:web:6cb8273ccca4b76b0bb954",
  measurementId: "G-W4LH5R1QGL"
}

const app = initializeApp(firebaseConfig)

const db = getFirestore(app)
const auth = getAuth(app)

export { app as firebaseApp, db, auth }