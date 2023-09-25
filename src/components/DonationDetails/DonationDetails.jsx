import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const DonationDetails = () => {
  const donations = useLoaderData();
  const { id } = useParams();
  // console.log(donations, id);
  const idInt = parseInt(id);
  const donation = donations.find((donation) => donation.id === idInt);
  //   console.log(donation);
  const btnBgColor = {
    backgroundColor: donation.text,
  };
  return (
    <div className="px-4 lg:px-0">
      <div className="relative">
        <img
          src={donation.picture}
          alt="Donation"
          className="w-full h-full rounded-lg"
        />
        <div className="absolute rounded-lg mx-auto bottom-0 left-0 right-0 top-auto h-24 bg-black opacity-40"></div>

        <div className="absolute bottom-0  p-6 flex items-center justify-center">
          <button
            className="bg-[#FF444A] text-white px-4 py-2 rounded"
            style={btnBgColor}
          >
            Donate ${donation.price}
          </button>
        </div>
      </div>
      <h2 className="text-[40px] font-bold mt-14 mb-6">{donation.title}</h2>
      <p className="pb-40">{donation.description}</p>
    </div>
  );
};

export default DonationDetails;
