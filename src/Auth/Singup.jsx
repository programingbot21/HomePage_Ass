import React from 'react';
import '../style/sinup.css'
import { Link } from 'react-router-dom';


function Singup() {
  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2 className="signup-title">Create Account ✨</h2>
        <p className="signup-subtitle">Fill in the information below to sign up</p>
        <form className="signup-form">
          <div className="input-group">
            <label>Full Name</label>
            <input type="text" placeholder="Enter your full name" required />
          </div>
          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" required />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" required />
          </div>
          <div className="input-group">
            <label>Confirm Password</label>
            <input type="password" placeholder="Confirm your password" required />
          </div>
          <button type="submit" className="signup-btn">Sign Up</button>
        </form>
        <p className="login-text">
          Already have an account? <Link to={'/login'}>Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Singup;
