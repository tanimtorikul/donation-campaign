import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonationData } from "../../Utlity/LocalStorage";
import DonationCard from "./DonationSavedCard";

const DonationList = () => {
  const [donatedData, setDonatedData] = useState([]);
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
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {donatedData.map((data) => (
        <DonationCard key={data.id} data={data}></DonationCard>
      ))}
    </div>
  );
};

export default DonationList;
