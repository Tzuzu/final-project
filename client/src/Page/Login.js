import React from 'react';
import { useMutation } from '@apollo/client'
import './style.css';

const Login = (props) => {
    // const [formState, setFormState] = useState({ email: '', password: '' });
    // const [login, { error, data }] = useMutation(LOGIN_USER);
    return (
        <div className="login-container">
            <div className="login-box">
                <div className="login-section">
                    <h2>Login</h2>
                    <p>Have an account? Sign in here</p>
                    {/* <form onSubmit={ handleSubmit }> */}
                    <form>
                        <div>
                            <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" name="email" placeholder="Email"/>
                        </div>
                        <div>
                            <label htmlFor="password" className="form-label">Password</label>
                                <input type="password" name="password" placeholder="Password"/>
                        </div>
                    </form>
                </div>
                <div className="signup-section">
                    <h2>Sign-up</h2>
                    <p>Not a user? Sign up here</p>
                    <form>
                        <div>
                            <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" name="email" placeholder="Email"/>
                        </div>
                        <div>
                            <label htmlFor="password" className="form-label">Password</label>
                                <input type="password" name="password" placeholder="Password"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
