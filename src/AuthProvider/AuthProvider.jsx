import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import auth from '../firebase/FirebaseConfig';

import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";

import { ToastContainer, toast } from 'react-toastify';

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

    //Login user 
    const singInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    //google login
    const googleLogin = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                console.log(user);
            }).catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    }
    //github login 

    const githubLogin = () => {
        signInWithPopup(auth, providerGithub)
            .then((result) => {
                const user = result.user;
                console.log(user);
                toast.success('Login Successful!')
            }).catch((error) => {

                const errorMessage = error.message;
                console.log(errorMessage);
            });
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

    const allValues = {
        user,
        createUser,
        singInUser,
        googleLogin,
        githubLogin

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