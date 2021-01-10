import React from "react";
import "./Card.css";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = ({ reviewText, username, userImg }) => {
  return (
    <div className="cardContainer">
      <div className="cardContainer__icon">
        <FontAwesomeIcon icon={faQuoteLeft} className="icon" />
      </div>
      <p className="cardContainer__text">{reviewText}</p>
      <span className="cardContainer__line" />
      <div className="cardContainer__user">
        <img src={userImg} />
        <span>{username}</span>
      </div>
    </div>
  );
};

export default Card;
