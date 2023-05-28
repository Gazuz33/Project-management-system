import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD_ttvj1JfTbKTk3maOjyuPQYg0tNiFYTs",
  authDomain: "chat-fb4ce.firebaseapp.com",
  projectId: "chat-fb4ce",
  storageBucket: "chat-fb4ce.appspot.com",
  messagingSenderId: "468701335789",
  appId: "1:468701335789:web:777ae282183f14a291fce4"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
