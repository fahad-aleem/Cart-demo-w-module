import firebase from "firebase/app";
import "firebase/firestore";

export const InitializeFirebase = () => {
  const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGEBUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APPID,
  };
  
  if (window && !window["firestoreInitialized"]) {
    window["firestoreInitialized"] = true; 
    firebase.initializeApp(firebaseConfig);
  }

  const db = firebase.firestore();

  if (process.env.USE_EMULATOR == "true") {
      db.useEmulator("localhost", 4044);
  } else {
    console.log("not using emulators");
  }
  return db;
};
export default InitializeFirebase;
