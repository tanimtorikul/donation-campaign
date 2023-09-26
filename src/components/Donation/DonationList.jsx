import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonationData } from "../../Utlity/LocalStorage";
import DonationSavedCard from "./DonationSavedCard";

const DonationList = () => {
  const [donatedData, setDonatedData] = useState([]);
  const [showBtn, setShowBtn] = useState(true)
  const donations = useLoaderData();
  useEffect(() => {
    const storedDonationIds = getStoredDonationData();
    if (donations.length > 0) {
      const dataDonated = donations.filter((donation) =>
        storedDonationIds.includes(donation.id)
      );
      setDonatedData(dataDonated);
    }
  }, []);

  const handleRemoveAll = () => {
    localStorage.clear();
    setDonatedData([]);
    setShowBtn(false)
  };
  return (
    <div>
      <div className="flex justify-center">
      {showBtn && (
          <button
            onClick={handleRemoveAll}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Remove All
          </button>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 lg:p-0 mt-6 lg:mt-12">
        {donatedData.map((data) => (
          <DonationSavedCard key={data.id} data={data}></DonationSavedCard>
        ))}
      </div>
    </div>
  );
};

export default DonationList;
