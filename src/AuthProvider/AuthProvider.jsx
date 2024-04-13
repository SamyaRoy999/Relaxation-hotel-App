import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import auth from '../firebase/FirebaseConfig';

import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";

import { toast } from 'react-toastify';

export const AuthContext = createContext(null)

//social auth provider
const provider = new GoogleAuthProvider();
const providerGithub = new GithubAuthProvider();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [login, setLogin] = useState(false)

    //create user email password
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //Login user 
    const singInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    //google login
    const googleLogin = () => {
        signInWithPopup(auth, provider)
        setLogin(true)
    }
    //github login 

    const githubLogin = () => {
        signInWithPopup(auth, providerGithub)
        setLogin(true)
    }
    // user find
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
        });
    }, [])


    console.log(user);
    // sign out 
    const userSignOut = () => {
        setUser(null)
        signOut(auth)
    }


    const allValues = {
        user,
        createUser,
        singInUser,
        googleLogin,
        githubLogin,
        userSignOut,
        setLogin,
        login

    }
    return (
        <AuthContext.Provider value={allValues}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;


AuthProvider.propTypes = {
    children: PropTypes.any
}