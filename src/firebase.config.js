import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDqNHpf2kxmmATPU3ousE_o2nnBDf5-pSY",
  authDomain: "finalhandover-4fea5.firebaseapp.com",
  databaseURL: "https://finalhandover-4fea5-default-rtdb.firebaseio.com",
  projectId: "finalhandover-4fea5",
  storageBucket: "finalhandover-4fea5.firebasestorage.app",
  messagingSenderId: "199018725174",
  appId: "1:199018725174:web:a816720798f11706abbd97"
};

const app = initializeApp(firebaseConfig);
export default app;