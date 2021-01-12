import React from "react";
import "./MoreAboutSection.css";
import aboutImg from "../../assets/illustrations/myrocketlaunch.png";

const MoreAboutSection = () => {
  return (
    <div className="moreAboutSection">
      <p>More About Lighthouse</p>
      <div className="moreAboutSection__info">
        <p>
          Lighthouse is about designing, building and deliverying best quality
          software for your company. {<br />}
          {<br />} We make sure that you get the best software inferstracture
          and set of applications to ensure the best experience of your clients.{" "}
          {<br />}
          {<br />} So wether you are handling thousands of payment transactions
          or you’re just starting out, you are in the right place.
        </p>
        <img src={aboutImg} />
      </div>
    </div>
  );
};

export default MoreAboutSection;
