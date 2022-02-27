import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";
import { getDoc, doc } from 'firebase/firestore';

import { auth } from '../firebase';
import { db } from '../firebase';


// const auth = getAuth();



export const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {

  const [currentUser, setCurrentUser] = useState();
  const [userData, setUserData] = useState();


  // const navigate = useNavigate();


  useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
        if (user != null) {
          const usersCollectionRef = doc(db, "Users", user.uid);

          getDoc(usersCollectionRef).then((result) => {
            setUserData(result.data());
          });
        }
    });
      
    return unsubscribe
  }, []);

//   const value = {
//     currentUser,
//     login,
//     signup,
//     logout,
//     updateprofile,
//     resetPassword
//   }
const value = { 
  currentUser,
  userData,
  setUserData, 
};

  return (
    <AuthContext.Provider value={value}>
      {children}
      </AuthContext.Provider>
  )
}