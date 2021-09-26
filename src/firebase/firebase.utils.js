import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBvb1QsU9P3JfWeH-Sqzd_e_UkSixMj8fY",
    authDomain: "crown-ecommerce-dbb3e.firebaseapp.com",
    databaseURL: "https://crown-ecommerce-dbb3e-default-rtdb.firebaseio.com",
    projectId: "crown-ecommerce-dbb3e",
    storageBucket: "crown-ecommerce-dbb3e.appspot.com",
    messagingSenderId: "783058757756",
    appId: "1:783058757756:web:bde37894e201564c3741f9"
};


firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;