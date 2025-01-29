import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css"; // Import CSS for futuristic effects


const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="glitch" data-text="404">404</div>
      <h2 className="title">ERROR!!!!</h2>
      <p className="description">
        It looks like you’ve lost your way.  
        But don’t worry, Get back to exploring Vipsee Infotech! 🚀
      </p>

      <div className="btn-container">
        <Link to="/" className="btn neon">
          🏠 Return to Home
        </Link>
        
      </div>
    </div>
  );
};

export default NotFound;
