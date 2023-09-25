import React from "react";

const DonationCard = ({ card }) => {
  const { picture, title, category, text, card_bg } = card;
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
    <div className="">
      <figure>
        <img src={picture} alt="Shoes" />
      </figure>
      <div className="card-body" style={cardBg}>
        <h2
          className="w-2/5 rounded text-sm font-medium flex justify-center p-"
          style={categoryColor}
        >
          {category}
        </h2>
        <p className="card-title" style={titleColor}>
          {title}
        </p>
      </div>
    </div>
  );
};

export default DonationCard;
