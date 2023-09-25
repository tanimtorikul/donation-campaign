const getStoredDonationData = () => {
    const storedDonationData = localStorage.getItem('donation-data');
    if (storedDonationData) {
      return JSON.parse(storedDonationData);
    }
    return [];
  };
  
  const saveDonationData = (id) => {
    const storedDonationDatas = getStoredDonationData();
    const exists = storedDonationDatas.find(donationId => donationId === id);
    if (!exists) {
      storedDonationDatas.push(id);
      localStorage.setItem('donation-data', JSON.stringify(storedDonationDatas));
    }
  };
  
  export { saveDonationData, getStoredDonationData };
  