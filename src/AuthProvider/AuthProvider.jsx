import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
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


    //create user email password
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    
    //User update 
    const updateUserProfile = (name, image) => {

        return updateProfile(auth.currentUser, {
            
            displayName: name,
            photoURL: image

        })
    }
    //Login user 
    const singInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    //google login
    const googleLogin = () => {
        signInWithPopup(auth, provider)
    }
    //github login 

    const githubLogin = () => {
        signInWithPopup(auth, providerGithub)
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
        updateUserProfile

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