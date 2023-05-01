import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null);
    
    // const user = null
  const [loading, setLoading] = useState(true);
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const loggedOut = () => {
        setLoading(true);
        signOut(auth)
    }
    useEffect(() => {
      const unsubscribe =  onAuthStateChanged(auth, loggedUser => {
            // console.log('onAuthState observed', loggedUser)
          setUser(loggedUser);
          setLoading(false);
      })
        return () => {
            unsubscribe();
        }
    }, [])
    const authInfo = {
      user,
      createUser,
      signIn,
      loggedOut,
      loading,
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;