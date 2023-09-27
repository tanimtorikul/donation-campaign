import { Link } from "react-router-dom";

const DonationSavedCard = ({ data }) => {
  const { id, picture, price, title, category, text, card_bg } = data;
  const cardBg = {
    backgroundColor: card_bg,
  };
  const textColor = {
    color: text,
  };
  const categoryColor = {
    color: text,
    backgroundColor: card_bg,
  };
  const btnBg = {
    backgroundColor: text,
  };

  return (
    <div className="shadow-lg rounded-lg lg:h-[200px] flex" style={cardBg}>
      <div className="w-1/3">
        <img className="w-full h-full object-cover" src={picture} alt="" />
      </div>
      <div className="w-2/3 p-4">
        <h2
          className="w-20 flex justify-center rounded text-sm font-medium mb-3"
          style={categoryColor}
        >
          {category}
        </h2>
        <h2 className="lg:text-xl font-semibold mb-2">{title}</h2>
        <p className="text-lg font-semibold mb-5" style={textColor}>
          ${price}.00
        </p>
        <div className="flex gap-10">
          <Link to={`/donate/${id}`}>
            <button
              style={btnBg}
              className="mt-4 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DonationSavedCard;
