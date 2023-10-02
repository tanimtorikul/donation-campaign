import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const Statistics = () => {
  const [donationData, setDonationData] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem("donation-data");
    if (storedData) {
      setDonationData(JSON.parse(storedData));
    }
  }, []);

  const yourDonation = donationData.reduce((total, item) => total + 1, 0);

  const data = [
    {
      name: "Your Donation",
      value: yourDonation,
    },
    {
      name: "Total Donation",
      value: 12 - yourDonation,
    },
  ];

  const COLORS = ["#FF444A", "#00C49F"];

  const RADIAN = Math.PI / 180;

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className="flex justify-center">
      <Helmet>
        <title>Donation Statistics</title>
      </Helmet>
      <div className="">
        <div className="chart-container">
          <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
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
          </ResponsiveContainer>
        </div>
        <div className="legend flex justify-center gap-6">
          {data.map((entry, index) => (
            <div key={`legend-${index}`} className="flex flex-col-reverse lg:flex-row items-center mb-2 ">
              <div className="text-sm">{entry.name}</div>
              <div
                className="w-16 lg:w-24 h-4 mr-2"
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
