
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyA3fP78mmhljTo8-khhNDJCwv0Zvjpw9x8",
  authDomain: "fir-auth-1132-dcc78.firebaseapp.com",
  projectId: "fir-auth-1132-dcc78",
  storageBucket: "fir-auth-1132-dcc78.appspot.com",
  messagingSenderId: "779564491866",
  appId: "1:779564491866:web:4829294c242c370d23e463"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth };