import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAp35nUHbagZ5D7ajvRU2Cwagi6e1NxIIA",
    authDomain: "clone-e1ece.firebaseapp.com",
    databaseURL: "https://clone-e1ece.firebaseio.com",
    projectId: "clone-e1ece",
    storageBucket: "clone-e1ece.appspot.com",
    messagingSenderId: "199615013539",
    appId: "1:199615013539:web:9c47f6e11d9151fc931516",
    measurementId: "G-5J27Q32FDM"
});

/* Setting up the dbase */
const db = firebaseApp.firestore();
/* Auth set up */
const auth = firebase.auth();

export {db,auth};