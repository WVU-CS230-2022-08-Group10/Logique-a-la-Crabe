export const environment = {
  firebase:{
    apiKey: "AIzaSyALm_gDhAii--Xkvdv5Rp2gl3bwLm9SDHA",
    authDomain: "logique-a-la-crabe.firebaseapp.com",
    projectId: "logique-a-la-crabe",
    storageBucket: "logique-a-la-crabe.appspot.com",
    messagingSenderId: "725366025307",
    appId: "1:725366025307:web:fec002eb5460e4b140637e",
    measurementId: "G-WKMM133ZYE"
  },
  production: true
};

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyALm_gDhAii--Xkvdv5Rp2gl3bwLm9SDHA",
  authDomain: "logique-a-la-crabe.firebaseapp.com",
  projectId: "logique-a-la-crabe",
  storageBucket: "logique-a-la-crabe.appspot.com",
  messagingSenderId: "725366025307",
  appId: "1:725366025307:web:fec002eb5460e4b140637e",
  measurementId: "G-WKMM133ZYE"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

