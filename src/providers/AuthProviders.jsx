import {  createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,onAuthStateChanged, signOut,GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../firebase/firebase.config";

 export  const AuthContext = createContext(null)

 const googleProvider = new GoogleAuthProvider();

  const AuthProviders = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading, setLoading] = useState(true)

const auth = getAuth(app)

const createUser =(email, password)=>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth,email,password )
}

const signUser = (email , password) =>{
    setLoading(true)
return signInWithEmailAndPassword (auth ,email, password)
}

const signInWithGoogle = () =>{
    setLoading(true)
    return signInWithPopup(auth, googleProvider);
}

const logOut = () =>{
    setLoading(true)
return signOut(auth)
}


//observe auth state change
useEffect(()=>{
 const unSubscribe =   onAuthStateChanged(auth, currentUser=>{
    console.log('observing curren user in side useEffect of AuthProvider',currentUser)
        setUser(currentUser);
        setLoading(false);
  
    })
    return()=>{
        unSubscribe();
    }

},[])

    const authInfo = {user,loading, createUser, signUser, signInWithGoogle ,logOut}
    //subai access korte parbe
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;

AuthProviders.PropTypes = {
    children:PropTypes.node
}