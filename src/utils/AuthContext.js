import React, { useContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.js';

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {

  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  function signup(username, email, password) {
    return auth.createUserWithEmailAndPassword(username, email, password)
  }

  function login(email, password) {
    return auth.signInUserWithEmailAndPassword(email, password)
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email)
  }

  function logout() {
    auth.signOut()
  }

  useEffect(() =>{
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      setLoading(false)
    })
    return unsubscribe
  }, [])

  const value = {
    currentUser,
    login,
    signup,
    logout,
    resetPassword
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
      </AuthContext.Provider>
  )
}