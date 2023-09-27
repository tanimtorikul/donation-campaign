

const Banner = () => {
  return (
    <div className="">
      <div className="mt-12 lg:mt-40 ">
      <h2 className="text-2xl lg:text-5xl font-bold text-center">
        I Grow By Helping People In Need
      </h2>
      <div className="flex items-center justify-center mt-10">
        <input
          type="text"
          className="w-64 px-4 py-2 border border-[#DEDEDE] rounded-l-md focus:outline-none focus:ring focus:border-blue-300"
          placeholder="Search here..."
        />
        <button className="px-4 py-2 bg-[#FF444A] text-white rounded-r-md hover:bg-red-600 focus:outline-none focus:ring focus:bg-red-600">
          Search
        </button>
      </div>
    </div>
    </div>
  );
};

export default Banner;
