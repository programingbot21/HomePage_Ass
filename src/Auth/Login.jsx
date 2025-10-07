import React from 'react';
import '../style/lo.css'
import { Link } from 'react-router-dom';


function Login() {
  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Welcome Back 👋</h2>
        <p className="login-subtitle">Please login to your account</p>
        <form className="login-form">
          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" required />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" required />
          </div>
          <button type="submit" className="login-btn">Login</button>
        </form>
        <p className="signup-text">
          Don’t have an account? <Link to={'/singup'}>Singup</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
