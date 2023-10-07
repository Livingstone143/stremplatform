import { initializeApp } from 'firebase/app';
import { getFirestore as firestore } from "firebase/firestore";
 const firebaseConfig = {
    apiKey: "AIzaSyAscnDNKvi0PtUzdWBCwBMuRpfk4qiU8qU",
    authDomain: "netflix-clone-b79a0.firebaseapp.com",
    projectId: "netflix-clone-b79a0",
    storageBucket: "netflix-clone-b79a0.appspot.com",
    messagingSenderId: "229733156852",
    appId: "1:229733156852:web:b4d2751d74e571d02b9ba1",
    measurementId: "G-E4FMFM54RR"
  };

  const firebaseApp =firebase.initializeApp(firebaseconfig);
  const db = firebaseApp.firestore();