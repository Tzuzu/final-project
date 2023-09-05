import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';
import './style.css';

const Signup = (props) => {
  const [formState, setFormState] = useState({ username: '', email: '', password: '' });
  const [signup, { error, data }] = useMutation(CREATE_USER);

  const handleSignUp = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await signup({
        variables: {
          username: formState.username,
          email: formState.email,
          password: formState.password,
        },
      });
      console.log(mutationResponse.data)
      const token = mutationResponse.data.createUser.token;
      Auth.login(token);
    } catch (e) {
      console.error(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp}>
      <div className="form-group">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="input"
            name="username"
            placeholder="Username"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
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
        <div className="form-group">
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
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;