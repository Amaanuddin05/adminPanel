import React, { useState } from 'react';
import '../styles/LoginPanel.css';

const LoginPanel = ({ onLoginSuccess }) => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });
  const [rememberMe, setRememberMe] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt with:', credentials);
    // In a real application, you would verify credentials against a backend
    // For demo purposes, we'll just simulate a successful login
    if (credentials.username && credentials.password) {
      // Call the onLoginSuccess callback provided by parent
      onLoginSuccess();
    }
  };

  return (
    <div className="login-container">
      <div className="login-panel">
        <div className="login-header">
          <svg 
            className="login-logo" 
            width="48" 
            height="48" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#2563EB" strokeWidth="2" />
            <path d="M8 14L12 10L16 14" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <h1>GeoAlert Admin</h1>
          <p>Sign in to access your admin dashboard</p>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={credentials.username}
              onChange={handleChange}
              placeholder="Enter your username"
              required
            />
          </div>
          
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </div>
          
          <div className="login-options">
            <div className="remember-me">
              <input
                type="checkbox"
                id="remember"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              <label htmlFor="remember">Remember me</label>
            </div>
            <a href="#" className="forgot-password">Forgot password?</a>
          </div>
          
          <button type="submit" className="login-button">Sign In</button>
        </form>
        
        <div className="login-footer">
          <p>Don't have an account? <a href="#">Contact administrator</a></p>
        </div>
      </div>
    </div>
  );
};

export default LoginPanel; 