import React from "react";
import '../styles/NavbarComponent.css'

// NavbarComponent.jsx
const NavbarComponent = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-content">
        <div className="navbar-logo">
          <svg 
            className="logo-image" 
            width="40" 
            height="40" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#3b82f6" strokeWidth="2" />
            <path d="M8 14L12 10L16 14" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="logo-text">GeoAlert-Admin</span>
        </div>
      </div>
    </div>
  );
};

export default NavbarComponent;