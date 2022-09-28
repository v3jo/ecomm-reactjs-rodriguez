// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlvuMeFLfomY21ZbZ02iKjdHYAvQfaMa4",
  authDomain: "fiorusly-store.firebaseapp.com",
  projectId: "fiorusly-store",
  storageBucket: "fiorusly-store.appspot.com",
  messagingSenderId: "343406717425",
  appId: "1:343406717425:web:895e50ac4038e3b8c37c50"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);