import React from "react";
import "./Card.css";

const Card = ({ reviewText, username, userImg }) => {
  return (
    <div className="cardContainer">
      <p className="cardContainer__text">{reviewText}</p>
      <div className="cardContainer__user">
        <img src={userImg} />
        <span>{username}</span>
      </div>
    </div>
  );
};

export default Card;
