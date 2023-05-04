import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebas.config';

export const AuthContext = createContext(null)

 const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const provider = new  GoogleAuthProvider()
    const gitHubProvider = new GithubAuthProvider();
    
    const [user, setUser]= useState(null);
    const [loading, setLoading] = useState(true)

    // for signup email and password
    const createUser = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword (auth, email, password);
    }
    
    // for signin email and password
    const logIn =(email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }


    //observe user
    const userUpdateData =(user,  name, photo)=>{
        setLoading(true)
       return  updateProfile (user, {
         displayName: name,
         photoURL:photo
     })
     
 }
 
    //logout from user
    const logOut = ()=>{
        setLoading(true)
        return signOut(auth)
    }

    //google signin
    const handleGoogleSignIn = ( ) =>{
        setLoading(true)
       return signInWithPopup (auth, provider)   
    }


     //github signin
    const handleGitHubSignIn= ()=>{
        setLoading(true)
       return signInWithPopup(auth, gitHubProvider)
       
    }


    useEffect(()=>{
       const unSubscribe=  onAuthStateChanged(auth, loggedUser =>{
            setUser(loggedUser)
            setLoading(false)
        })

        return () =>{
            unSubscribe ();
        }
    },[])

    const authInfo ={
        user,
        loading,
        createUser,
        logIn,
        logOut,
        userUpdateData,
        handleGoogleSignIn,
        handleGitHubSignIn
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;