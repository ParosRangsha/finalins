// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1vBMMIVLES7r_KVPrQrjlAqehg2RUe58",
  authDomain: "finalins.firebaseapp.com",
  databaseURL: 'https://finalins-default-rtdb.firebaseio.com',
  projectId: "finalins",
  storageBucket: "finalins.firebasestorage.app",
  messagingSenderId: "822638464267",
  appId: "1:822638464267:web:6d5f3540298f2ddc55260e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;