import firebase from "firebase"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDpHU0V4Z3Ey6_pnukbtTHE11WrQCwkHT8",
    authDomain: "isoi-chapter-5a60c.firebaseapp.com",
    projectId: "isoi-chapter-5a60c",
    storageBucket: "isoi-chapter-5a60c.appspot.com",
    messagingSenderId: "497243032644",
    appId: "1:497243032644:web:f9b6c2e4dd0630dcec8011",
    measurementId: "G-J2XEJWQST8"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;