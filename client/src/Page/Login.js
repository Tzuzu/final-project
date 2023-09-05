import React from 'react';
import Signup from '../components/Signup';
import Signin from '../components/Signin';

const Login = () => {
  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-section">
          <Signin />
        </div>
        <div className="signup-section">
          <Signup />
        </div>
      </div>
    </div>
  );
};

export default Login;