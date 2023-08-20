import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyATFu88bLtZMAe8CHsFch28Sdo0QOYTF48",
  authDomain: "ecommerstesoritos.firebaseapp.com",
  projectId: "ecommerstesoritos",
  storageBucket: "ecommerstesoritos.appspot.com",
  messagingSenderId: "496959021475",
  appId: "1:496959021475:web:fce1a6404026eb1e307a16"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);