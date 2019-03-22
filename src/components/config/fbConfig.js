import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyD5KOa92EVcKhR6s6dYGhPEqvq2OfJE94c",
    authDomain: "net-plan-f62f2.firebaseapp.com",
    databaseURL: "https://net-plan-f62f2.firebaseio.com",
    projectId: "net-plan-f62f2",
    storageBucket: "net-plan-f62f2.appspot.com",
    messagingSenderId: "474757872892"
};

firebase.initializeApp(config);


export default firebase;