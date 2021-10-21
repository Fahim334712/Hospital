import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword } from "firebase/auth";
import initializeAuthentication from "../../Firebase/firbase.init";
initializeAuthentication();

const UseFirebase = () => {
    const [user, setUser] = useState({});
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');



    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider);

    }
    const handleEmailChange = e => {
        setEmail(e.target.value);
        console.log(email);
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value);
        console.log(password);
    }
    const signInEmail = () => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
        });
    }, [])
    return {
        user,
        signInUsingGoogle,
        logOut,
        signInEmail,
        handleEmailChange,
        handlePasswordChange,

    }
}
export default UseFirebase;