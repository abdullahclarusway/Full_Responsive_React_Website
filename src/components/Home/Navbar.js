import React from "react";
import "./Navbar.css";
// import logo from "../../assets/logo/logo_croped.png";
import logo from "../../assets/logo/logo1.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__left">
        <img src={logo} />
        <span>Lighthouse</span>
      </div>
      <div className="navbar__right">
        <button className="navbar__right--firstbtn">Get Started</button>
        <button className="navbar__right--secondbtn">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
