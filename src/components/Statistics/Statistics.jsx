import React, { useState, useEffect } from "react";
import { PieChart, Pie, Cell } from "recharts";

const Statistics = () => {
  const [donationData, setDonationData] = useState([]);
  
  
  useEffect(() => {
    const storedData = localStorage.getItem("donation-data");
    if (storedData) {
      setDonationData(JSON.parse(storedData));
    }
  }, []);
  const yourDonation = donationData.reduce((total, item) => total + item, 0);

  const data = [
    { name: 'Your Donation', value: yourDonation },
    { name: 'Total Donation', value: 12 },
  ];
console.log(donationData);

 

  const COLORS = ["#FF444A", "#00C49F"];

  return (
    <div className="flex justify-center">
      <div className="">
        <div className="chart-container">
          <PieChart width={400} height={400}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={120}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </div>
        <div className="legend flex justify-center gap-6">
          {data.map((entry, index) => (
            <div key={`legend-${index}`} className="flex items-center mb-2">
              <div className="text-sm">{entry.name}</div>
              <div
                className="w-24 h-4 mr-2"
                style={{ backgroundColor: COLORS[index % COLORS.length] }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Statistics;
