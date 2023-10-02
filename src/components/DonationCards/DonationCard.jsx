import React from "react";
import { Link } from "react-router-dom";

const DonationCard = ({ card }) => {
  const { id, picture, title, category, text, card_bg } = card;
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
    <Link to={`/donate/${id}`}>
      <div className="card card-compact p-4 lg:p-0">
        <figure>
          <div>
            <img src={picture} alt="Shoes" />
          </div>
        </figure>
        <div className="card-body rounded-lg " style={cardBg}>
          <h2
            className="w-20 lg:w-1/3 rounded text-sm font-medium flex justify-center"
            style={categoryColor}
          >
            {category}
          </h2>
          <p
            className="card-title text-lg md:text-sm lg:text-lg"
            style={titleColor}
          >
            {title}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default DonationCard;
