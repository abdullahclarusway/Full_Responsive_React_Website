import React from "react";
import "./Hero.css";
import logo from "../../assets/logo/logo2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { Element, scroller } from "react-scroll";

const Hero = (props) => {
  const scrollToNextSection = () => {
    scroller.scrollTo("servicesSection", { smooth: true, duration: 1500 });
  };
  //   const scrollToNextSection = () => {
  //     alert("hello");
  //   };
  return (
    <Element name="servicesSection">
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
    </Element>
  );
};

export default Hero;
