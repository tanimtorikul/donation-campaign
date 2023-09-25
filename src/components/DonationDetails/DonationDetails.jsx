import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const DonationDetails = () => {
  const donations = useLoaderData();
  const { id } = useParams();
  // console.log(donations, id);
  const idInt = parseInt(id);
  const donation = donations.find((donation) => donation.id === idInt);
  //   console.log(donation);
  return (
    <div>
      <h2>Donation details:{id}</h2>
      <div className="relative">
        <img
          src={donation.picture}
          alt="Donation"
          className="w-full lg:h-[800px] rounded-lg"
        />

        <div className="absolute bottom-0 p-6 flex items-center justify-center">
          <button className="bg-[#FF444A] text-white px-4 py-2 rounded">
            Donate ${donation.price}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DonationDetails;
