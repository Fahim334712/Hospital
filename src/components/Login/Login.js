

import { Link, useLocation, useHistory } from 'react-router-dom';
import UseAuth from '../Hooks/UseAuth';

import './Login.css';

const Login = () => {


    const { signInUsingGoogle } = UseAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const handleGoogleLogIn = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }

    const handleLogin = e => {
        console.log('addedv')
        e.preventDefault();
    }

    return (
        <div className="thee mt-3 mb-3">
            <h2>Sign In</h2>
            <form onSubmit={handleLogin} className="forms mt-2 pb-3 ">

                <h6 className="ds">Email &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :&nbsp;<input className="mt-2 gfd bv" type="email" name="" id="" placeholder="Type your email" /></h6>
                <h6 className="ds">Password : <input className="bv" type="password" name="" id="" placeholder="Password" /></h6>
                <input className="ten" type="submit" value="Submit" />
                <p>Create New Acount ?<Link to="/register">Register</Link></p>
                <p>------------------or------------------</p>

                <div className="jhh">
                    <i onClick={handleGoogleLogIn} className="fab fa-google mx-2 bgs"></i>
                    <i className="fab fa-github bgs mx-2"></i>
                    <i className="fab fa-facebook bgs"></i>
                </div>
            </form>
        </div>
    );
};

export default Login;