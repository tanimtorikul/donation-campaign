import React from "react";
import { Link } from "react-router-dom";

const DonationCard = ({ card }) => {
  const {id, picture, title, category, text, card_bg } = card;
  const categoryColor = {
    color: text,
    backgroundColor: card_bg,
  };
  const cardBg = {
    backgroundColor: card_bg,
  };
  const titleColor = {
    color: text,
  };

  return (
    <Link to={`/donation/${id}`}>
      <div className="card card-compact shadow-xl">
        <figure>
          <div>
            <img src={picture} alt="Shoes" />
          </div>
        </figure>
        <div className="card-body " style={cardBg}>
          <h2
            className="w-1/3 rounded text-sm font-medium flex justify-center p"
            style={categoryColor}
          >
            {category}
          </h2>
          <p className="card-title" style={titleColor}>
            {title}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default DonationCard;
