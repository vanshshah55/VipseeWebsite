import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1 style={{ fontSize: "50px", color: "#02457A" }}>404</h1>
      <p style={{ fontSize: "18px", color: "gray" }}>
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        style={{
          textDecoration: "none",
          color: "white",
          background: "#02457A",
          padding: "10px 20px",
          borderRadius: "5px",
        }}
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
