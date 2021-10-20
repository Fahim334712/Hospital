

import './Login.css';

const Login = () => {


    return (
        <div className="thee mt-3 mb-3">
            <h2>Sign In</h2>
            <form className="forms mt-2 pb-3">

                <h6>Email : <input className="mt-2 gfd" type="email" name="" id="" placeholder="Type your email" /></h6>
                <h6>Password : <input type="password" name="" id="" placeholder="Password" /></h6>
                <input type="submit" value="Submit" /><br />
                <p>Create New Acount ?Register</p>
                <p>or</p>
                <hr />
                <div className="jhh">
                    <i className="fab fa-google mx-2 bgs"></i><i className="fab fa-github bgs mx-2"></i><i className="fab fa-facebook bgs"></i>
                </div>
            </form>
        </div>
    );
};

export default Login;