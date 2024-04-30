import { initializeApp } from "firebase/app";

import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAjS-BbgsHY_5WKh5jA9wW1wY_BMyqJzMI",
    authDomain: "it35-t-bagasbas.firebaseapp.com",
    projectId: "it35-t-bagasbas",
    storageBucket: "it35-t-bagasbas.appspot.com",
    messagingSenderId: "276808993032",
    appId: "1:276808993032:web:0a35c10769ca409a2684bd",
    measurementId: "G-X88D9CQWMH"
  }

  const firebaseApp = initializeApp(firebaseConfig);

// 
const db = getFirestore(firebaseApp);

export{db}