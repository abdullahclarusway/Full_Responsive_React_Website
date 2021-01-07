import React from "react";
import "./Hero.css";
import logo from "../../assets/logo/logo2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
 
  const scrollToNextSection = () => {
    alert("hello");
  };
  return (
    <div className="hero">
      <img src={logo} />
      <h1>Lighthouse</h1>
      <p>Software Development</p>
      <p>From the Best in the Industry</p>
      <button>Start your Project</button>
      <div className="hero__icon" onClick={scrollToNextSection}>
        <FontAwesomeIcon icon={faAngleDown} color="white" />
      </div>
    </div>
  );
};

export default Hero;
