import React from "react";
import "./Header.css";
import logo from "./img/logo_icon.png";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="과거" style={{ maxWidth: "25%" }} />
    </div>
  );
};

export default Header;
