import React from 'react';
import './Login.css';

const Login = () => {
    return (
        <div className="login-container">
            <div className="login-box">
                <div className="login-section">
                    <h2>Login</h2>
                    <p>Have an account? Sign in here</p>
                </div>
                <div className="signup-section">
                    <h2>Sign-up</h2>
                    <p>Not a user? Sign up here</p>
                </div>
            </div>
        </div>
    );
}

export default Login;
