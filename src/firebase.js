import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';


// import { getAuth, onAuthStateChanged } from 'firebase/auth';
// import { getMessaging } from "firebase/messaging";
// from a component later
// const messaging = getMessaging();
// const FirebaseContext = createContext(null)
// export { FirebaseContext }
// export const auth = getAuth(app);

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);



export { auth, db }



