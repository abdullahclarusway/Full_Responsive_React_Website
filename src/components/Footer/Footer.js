import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import logo from "../../assets/logo/logo2.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__logo">
        <img src={logo} />
        <h1>Lighthouse</h1>
      </div>
      <h1>Just say the magical word</h1>
      <h1>and we will do the rest</h1>
      <button>Start your Project</button>
      <div className="footer__access">
        <div className="footer__access--link">
          <a>Privacy Policy</a>
          <a>Terms of Service</a>
          <a>Contact</a>
        </div>
        <div className="footer__access--social">
          <div>
            <FontAwesomeIcon icon={faTwitter} />
          </div>
          <div>
            <FontAwesomeIcon icon={faLinkedin} />
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        &copy; 2020 Lighthouse All rights reserved
      </div>
    </div>
  );
};

export default Footer;
