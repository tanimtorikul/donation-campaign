import React, { useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  getStoredDonationData,
  saveDonationData,
} from "../../Utlity/LocalStorage";

const DonationDetails = () => {
  const [donateBtn, setDonateBtn] = useState("Donate $");

  const donations = useLoaderData();
  const { id } = useParams();
  // console.log(donations, id);
  const idInt = parseInt(id);
  const donation = donations.find((donation) => donation.id === idInt);
  //   console.log(donation);
  const btnBgColor = {
    backgroundColor: donation.text,
  };
  const handleDonate = () => {
    const storedDonationData = getStoredDonationData();
    console.log(storedDonationData);
    const isExist = storedDonationData.find(
      (donationID) => donationID === idInt
    );
    console.log(isExist);
    if (isExist) {
      toast.error("You have already donated!", {
        autoClose: 1500,
      });
    } else {
      saveDonationData(idInt);
      toast.success("You have donated succesfully!", {
        autoClose: 1500,
      });

      setDonateBtn("Donated $");
    }
  };
  return (
    <div className="px-4 lg:px-0 lg:mt-24">
      <div className="relative">
        <img
          src={donation.picture}
          alt="Donation"
          className="w-full h-full rounded-lg"
        />
        <div className="absolute rounded-lg mx-auto bottom-0 left-0 right-0 top-auto h-24 bg-black opacity-40"></div>

        <div className="absolute bottom-0  p-6 flex items-center justify-center">
          <button
            onClick={handleDonate}
            className="bg-[#FF444A] text-white px-4 py-2 rounded"
            style={btnBgColor}
          >
            {donateBtn}
            {donation.price}
          </button>
        </div>
      </div>
      <div className="text-center lg:text-start">
        <h2 className="text-2xl lg:text-[40px] font-extrabold mt-14 mb-6">
          {donation.title}
        </h2>
        <p className="pb-40">{donation.description}</p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default DonationDetails;
