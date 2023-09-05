import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import './style.css';
import { LOGIN_USER } from '../utils/mutations'; // Import your GraphQL mutation here
import Auth from '../utils/auth'; // Import your Auth component here

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const Signup = (props)

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-section">
          <h2>Login</h2>
          <p>Have an account? Sign in here</p>
          <form onSubmit={handleFormSubmit}>
            <div>
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
              />
            </div>
            <button type="submit">Login</button> {/* Added login button */}
          </form>
        </div>
        <div className="signup-section">
          <h2>Sign-up</h2>
          <p>Not a user? Sign up here</p>
          <form>
            <div>
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input type="email" name="email" placeholder="Email" />
            </div>
            <div>
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input type="password" name="password" placeholder="Password" />
            </div>
            <button type="submit">Sign Up</button> {/* Added sign-up button */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
