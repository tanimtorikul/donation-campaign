import { useState } from "react";
import DonationCards from "../DonationCards/DonationCards";

const Banner = ({ cards }) => {
  // console.log(cards[0].category);
  const [searchValue, setSearchValue] = useState("");
  const [filteredCards, setFilteredCards] = useState(cards);
  // console.log(card);
  console.log(filteredCards);
  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };
  const handleSearch = () => {
    // console.log(searchValue);
    const filtered = cards.filter((card) =>
      card.category.toLowerCase().includes(searchValue.toLowerCase()) ||
      card.title.toLowerCase().includes(searchValue.toLowerCase())
    );

    setFilteredCards(filtered);
  };
  console.log(filteredCards);

  return (
    <div className="mt-12 lg:mt-40 ">
      <h2 className="text-2xl lg:text-5xl font-bold text-center">
        I Grow By Helping People In Need
      </h2>
      <div className="flex items-center justify-center mt-10">
        <input
          value={searchValue}
          onChange={handleInputChange}
          type="text"
          className="w-64 px-4 py-2 border border-[#DEDEDE] rounded-l-md focus:outline-none focus:ring focus:border-blue-300"
          placeholder="Search here..."
        />
        <button
          onClick={handleSearch}
          className="px-4 py-2 bg-[#FF444A] text-white rounded-r-md hover:bg-red-600 focus:outline-none focus:ring focus:bg-red-600"
        >
          Search
        </button>
      </div>
      <div>
        <DonationCards cards={filteredCards} />
      </div>
    </div>
  );
};

export default Banner;
