// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEfukRmyU9y1wY6mNaoTgPuO44SQXDPCg",
  authDomain: "bike-hunter-8a6f4.firebaseapp.com",
  projectId: "bike-hunter-8a6f4",
  storageBucket: "bike-hunter-8a6f4.appspot.com",
  messagingSenderId: "844051069369",
  appId: "1:844051069369:web:6fb01731f0714bf49c1e68"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;