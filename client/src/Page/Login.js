import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { gql } from '@apollo/client';
import './style.css';

const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

const Login = (props) => {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [loginUser] = useMutation(LOGIN_USER);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const { data } = await loginUser({ 
                variables: { 
                    email: formState.email, 
                    password: formState.password 
                } 
            });
            console.log('Login successful:', data);
        } catch (error) {
            console.error('Login error:', error);
        }
    }

    return (
        <div className="login-container">
            <div className="login-box">
                <div className="login-section">
                    <h2>Login</h2>
                    <p>Have an account? Sign in here</p>
                    <form onSubmit={ handleSubmit }>
                        <div>
                            <label htmlFor="email" className="form-label">Email</label>
                                <input 
                                type="email" 
                                name="email" 
                                placeholder="Email"
                                value={ formState.email }
                                onChange={(e) => setFormState({...formState, email: e.target.value })}
                                />
                        </div>
                        <div>
                            <label htmlFor="password" className="form-label">Password</label>
                                <input 
                                type="password" 
                                name="password" 
                                placeholder="Password"
                                value={ formState.password }
                                onChange={(e) => setFormState({...formState, password: e.target.value })}
                                />
                        </div>
                    </form>
                </div>
                <div className="signup-section">
                    <h2>Sign-up</h2>
                    <p>Not a user? Sign up here</p>
                    <form>
                        <div>
                            <label htmlFor="email" className="form-label">Email</label>
                                <input 
                                type="email" 
                                name="email" 
                                placeholder="Email"
                                />
                        </div>
                        <div>
                            <label htmlFor="password" className="form-label">Password</label>
                                <input 
                                type="password" 
                                name="password" 
                                placeholder="Password"
                                />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;