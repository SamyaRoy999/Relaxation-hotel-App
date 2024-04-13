
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBe941dTPuUih1H-Mauo68zKLDo-afNKok",
  authDomain: "real-estate-auth-d3baf.firebaseapp.com",
  projectId: "real-estate-auth-d3baf",
  storageBucket: "real-estate-auth-d3baf.appspot.com",
  messagingSenderId: "502314399627",
  appId: "1:502314399627:web:add74ca1c2f08fb5e6a18e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth