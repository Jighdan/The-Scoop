import firebase from 'firebase';
require('dotenv').config();

var firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: "",
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
};
let Firebase
if (!firebase.apps.length) {
    Firebase = firebase.initializeApp(firebaseConfig);
} else {
    Firebase = firebase
}
const GoogleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    Firebase,
    GoogleAuthProvider
    
};