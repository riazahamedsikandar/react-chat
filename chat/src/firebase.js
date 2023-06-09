// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDv92BNdY7qyaryqgj1o4seQ4a1TjGQAf8",
  authDomain: "chat-ui-6537d.firebaseapp.com",
  projectId: "chat-ui-6537d",
  storageBucket: "chat-ui-6537d.appspot.com",
  messagingSenderId: "430264801830",
  appId: "1:430264801830:web:0e3895c3d8bcb42e2e24e7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)