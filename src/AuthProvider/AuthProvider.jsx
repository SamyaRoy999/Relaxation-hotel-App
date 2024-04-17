import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import auth from '../firebase/FirebaseConfig';

import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";



export const AuthContext = createContext(null)

//social auth provider
const provider = new GoogleAuthProvider();
const providerGithub = new GithubAuthProvider();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loding, setLoding] = useState(true)

    const [Name, setName] = useState([])
    const [photo, setPhoto] = useState([])

    //create user email password
    const createUser = (email, password) => {
        setLoding(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    console.log(loding);
    //User update 
    const updateUserProfile = (name, image) => {

        return updateProfile(auth.currentUser, {

            displayName: name,
            photoURL: image

        })
    }
    //Login user 
    const singInUser = (email, password) => {
        setLoding(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    //google login
    const googleLogin = () => {
        setLoding(true)
        return signInWithPopup(auth, provider)
    }
    //github login 

    const githubLogin = () => {
        setLoding(true)
        return signInWithPopup(auth, providerGithub)
    }
    // user find
    useEffect(() => {
        const unSuvscrive = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)

            }
            setLoding(false)
        }); return () => unSuvscrive()
    }, [])


    console.log(user);
    // sign out 
    const userSignOut = () => {

        signOut(auth)
        setLoding(false)
        setUser(null)
    }


    const allValues = {
        user,
        loding,
        createUser,
        singInUser,
        googleLogin,
        githubLogin,
        userSignOut,
        updateUserProfile,
        setName,
        setPhoto,
        Name,
        photo,


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