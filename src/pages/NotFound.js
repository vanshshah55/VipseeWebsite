import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css"; // Import CSS for futuristic effects
import { HashLink } from 'react-router-hash-link';

const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="glitch" data-text="404">404</div>
      <h2 className="title">Lost in Cyberspace?</h2>
      <p className="description">
        It looks like you’ve entered an unknown dimension.  
        But don’t worry, we’ll teleport you back! 🚀
      </p>

      <div className="btn-container">
        <Link to="/" className="btn neon">
          🏠 Return to Home
        </Link>
        <HashLink to="/#services" className="btn neon secondary">
          🔍 Explore Services
        </HashLink>
      </div>
    </div>
  );
};

export default NotFound;
