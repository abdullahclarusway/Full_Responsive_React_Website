import React from "react";
import "./OurService.css";

const OurService = ({ title, description, imgUrl, isReversed }) => {
  return (
    <div className={`ourService ${isReversed && "ourService__reverse"}`}>
      <div className="ourService__text">
        <h2 className="ourService__title">{title}</h2>
        <p className="ourService__desc">{description}</p>
      </div>
      <img src={imgUrl} />
    </div>
  );
};

export default OurService;
