import React, { useContext, useEffect, useState } from "react";
import {auth} from "../../src/Components/firebase"
import {onAuthStateChanged} from "firebase/auth"
const AuthContext=React.createContext();

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider({chidren}){
    const [currentUser, setCurrentUser]=useState(null);
    const[userLoggedIn, setUserLoggedIn]=useState(false);
    const[loading, setLoading]=useState(true);

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth, initializerUser);
        return unsubscribe;
    }, [])

    async function initializerUser(user){
        if(user){
            setCurrentUser({ ...user})
        }else{
            setCurrentUser(null)
            setUserLoggedIn(false)
        }
        setLoading(false)
    }
    const value={
        currentUser,
        userLoggedIn, 
        loading
    }
    
    return(
        <AuthContext.Provider value={value}>
            {!loading && chidren}
        </AuthContext.Provider>
    )
}