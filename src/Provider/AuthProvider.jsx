/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react"
import auth from "../Firebase/firebase.config";
import {  signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";

const googleProvider = new GoogleAuthProvider();


export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)


    // Google LogIn
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)

    }

    // Sign in
    const createUser = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn = (email,password)=> {
        return signInWithEmailAndPassword(auth,email,password);
    }
    const LogOut = () => {
        return signOut(auth);
    }

    useEffect( ()=> {
        const unSubscribe =   onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)

        })
        return ()=> {
            unSubscribe();
        }

    } , [])


    const authentications = {
        googleLogin,
        createUser,
        user,
        signIn,
        LogOut
    }



  return (
    <AuthContext.Provider value={authentications}>
        {children}

    </AuthContext.Provider>
  )
}

export default AuthProvider