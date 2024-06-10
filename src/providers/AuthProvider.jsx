import { createContext, useEffect, useState } from 'react';
import {
    getAuth,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    updateProfile,
    signOut,
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
    signInWithPopup
} from 'firebase/auth';
import app from '../../firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setIsLoading(false);
        });

        return () => {
            unsubscribe();
        };
    }, []);

    const handleRegister = (email, password) => {
        setIsLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const handleLogin = (email, password) => {
        setIsLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const loginWithPopup = (provider) => {
        return signInWithPopup(auth, provider);
    };

    const profileUpdate = (newUser, name, photo) => {
        return updateProfile(newUser, {
            displayName: name,
            photoURL: photo
        });
    };

    const logOut = () => {
        return signOut(auth);
    };

    const forgetPassword = (email) => {
        return sendPasswordResetEmail(auth, email);
    };

    const authInfo = {
        user,
        isLoading,
        setIsLoading,
        handleRegister,
        handleLogin,
        loginWithPopup,
        logOut,
        forgetPassword,
        profileUpdate
    };
    return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
