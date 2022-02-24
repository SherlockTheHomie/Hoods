import React, { createContext, useEffect } from 'react';
import { initializeApp } from 'firebase/app'
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, collection, getDocs, getDoc } from '@firebase/firestore';
import { getMessaging } from "firebase/messaging";

const messaging = getMessaging();


import { todoActions } from '../state/todos';

// we create a React Context, for this to be accessible
// from a component later
const FirebaseContext = createContext(null)
export { FirebaseContext }

const firebaseConfig = {
    apiKey: "AIzaSyAebDlYfcKwGcFtNwzCz-fR9Wcy510wViY",
    authDomain: "wechill-16f5e.firebaseapp.com",
    databaseURL: "https://wechill-16f5e-default-rtdb.firebaseio.com/",
    projectId: "wechill-16f5e",
    storageBucket: "wechill-16f5e.appspot.com",
    messagingSenderId: "934957147824",
    appId: "1:934957147824:web:fb50d4856abe0f802b7d75",
    measurementId: "G-FWJZQ5BRC3"
};

const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);
export const auth = getAuth(app);


onAuthStateChanged(auth, user => {
    if(user === null) {
        console.log('logged in!');
    } else {
        console.log('not real!');
    }
});

