import React, { memo, useState } from 'react';
import { Link } from 'react-router-dom';
import UseAuth from '../Hooks/UseAuth';

const Register = memo(() => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { signInUsingGoogle, signInEmail, handleEmailChange, handlePasswordChange } = UseAuth();

    const handleRegister = e => {
        if (password.length < 6) {
            return;
        }
        e.preventDefault();
        signInEmail()
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const handleGoogleLogIn = () => {
        signInUsingGoogle();

    }


    return (
        <div className="text-center">
            <h2>Register New Account</h2>
            <form onSubmit={handleRegister} className="forms mt-2 pb-3 mb-3">
                <input onBlur={handleEmailChange} className="mt-2 gfd bv" type="email" name="" id="" placeholder="Your Email" required /><br /><br />
                <input onBlur={handlePasswordChange} className="mt-2 gfd bv" type="password" name="" id="" placeholder="Your Password" required /><br /><br />

                <input className="ten" type="submit" value="Submit" />
                <p>Already have an account? <Link to="/login">Login</Link></p>
                <p>------------------or------------------</p>

                <div className="jhh">
                    <i onClick={handleGoogleLogIn} className="fab fa-google mx-2 bgs"></i><i className="fab fa-github bgs mx-2"></i><i className="fab fa-facebook bgs"></i>
                </div>
            </form>

        </div>
    );
});

export default Register;