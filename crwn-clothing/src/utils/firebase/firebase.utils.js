import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCFLu6LveOTIJ_JlFk0czmWL9-Tt74mZr8",
  authDomain: "crwn-clothing-db-4c2a8.firebaseapp.com",
  projectId: "crwn-clothing-db-4c2a8",
  storageBucket: "crwn-clothing-db-4c2a8.firebasestorage.app",
  messagingSenderId: "93528289968",
  appId: "1:93528289968:web:59e6caee4d0e482fa84175",
};

const firebaseapp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);