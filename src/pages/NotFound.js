import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.errorCode}>404</h1>
        <h2 style={styles.title}>Oops! Page Not Found</h2>
        <p style={styles.text}>
          Looks like the page you’re looking for doesn’t exist.  
          Don’t worry! Let’s get you back on track. 🚀
        </p>

        <div style={styles.btnContainer}>
          <Link to="/" style={styles.button}>
            🏠 Go to Home
          </Link>
          <Link to="/services" style={styles.secondaryButton}>
            🔍 Explore Services
          </Link>
        </div>
      </div>
    </div>
  );
};

// 💠 Modern Styling
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "linear-gradient(135deg, #02457A, #011F3F)", // Your website color theme
    textAlign: "center",
    color: "#fff",
    padding: "20px",
  },
  content: {
    maxWidth: "600px",
  },
  errorCode: {
    fontSize: "120px",
    fontWeight: "bold",
    margin: "0",
    color: "#FFA500",
  },
  title: {
    fontSize: "28px",
    marginBottom: "10px",
  },
  text: {
    fontSize: "18px",
    marginBottom: "20px",
    opacity: "0.8",
  },
  btnContainer: {
    marginTop: "20px",
    display: "flex",
    gap: "15px",
    justifyContent: "center",
  },
  button: {
    background: "#FFA500",
    color: "#fff",
    padding: "12px 20px",
    borderRadius: "6px",
    textDecoration: "none",
    fontWeight: "bold",
    transition: "0.3s",
  },
  secondaryButton: {
    background: "transparent",
    border: "2px solid #fff",
    color: "#fff",
    padding: "12px 20px",
    borderRadius: "6px",
    textDecoration: "none",
    fontWeight: "bold",
    transition: "0.3s",
  },
};

// 🛠 Add Hover Effects
styles.button[":hover"] = { background: "#FF8C00" };
styles.secondaryButton[":hover"] = { background: "#fff", color: "#02457A" };

export default NotFound;
