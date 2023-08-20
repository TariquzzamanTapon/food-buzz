import React, { useContext, useEffect, useState } from 'react';
import { createContext } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/firebase.init';
export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const auth = getAuth(app);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const userProfile = (rUser, name, img) => {
        updateProfile(rUser, {
            displayName: name,
            photoURL: img
        }).then(result =>{
            setUser(result.user)
            console.log(result.user,'user profile')
        })
        .catch(error =>{
            console.log(error, 'come from error')
        })
    }

    const singIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            unsubscribed()
        }
    }, []);

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const signGoogle = () =>{
        return signInWithPopup(auth, googleProvider);
    }
    const signGithub = () =>{
        return signInWithPopup(auth, githubProvider);
    }

    const authInfo = {
        user,
        createUser,
        singIn,
        logOut,
        userProfile,
        signGoogle,
        signGithub,
        loading
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;