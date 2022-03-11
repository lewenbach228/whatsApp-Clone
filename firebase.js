import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { getStorage } from "firebase/storage";
import { initializeFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBx1ZBqKqakyJ2QhQ5QsLX1kfcs7oIlp28",
  authDomain: "whatsapp-77d56.firebaseapp.com",
  projectId: "whatsapp-77d56",
  storageBucket: "whatsapp-77d56.appspot.com",
  messagingSenderId: "276759579658",
  appId: "1:276759579658:web:5cebec246edb78624f23f3",
  measurementId: "G-93J3T98YRM",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});

export function signUp(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}
export function signIn(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}
