// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

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
  production: false
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

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
