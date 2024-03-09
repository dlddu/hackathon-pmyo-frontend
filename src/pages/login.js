import React from "react";
import "../css/LoginScreen.css"; // make sure to create a CSS file with the name LoginScreen.css
const LoginScreen = () => {
  return (
    <div className="login-screen">
      <header className="header">
        {/* Your back arrow and menu icon will go here, you can use svg or icons from a library */}
      </header>
      <main className="main-content">
        <div className="logo-container">
          <img src="path-to-your-logo.png" alt="FireFit Logo" />
          <p>Stay in shape, stay healthy</p>
        </div>
        <div className="form-container">
          <button className="signup-button">Sign Up</button>
          <button className="login-button">Login</button>
          <a href="/forgot-password" className="forgot-password-link">
            Forgot your password?
          </a>
        </div>
      </main>
    </div>
  );
};
export default LoginScreen;
