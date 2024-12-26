import React, { useState } from "react";
import { FaUserFriends, FaEnvelopeOpen, FaMousePointer } from "react-icons/fa";

const SocialMediaCards = () => {
  const [selectedDepartment, setSelectedDepartment] = useState("All");

  const departmentData = {
    All: [
      { title: "Total Subscribers", value: "71,897", change: "+122", icon: FaUserFriends },
      { title: "Avg. Open Rate", value: "58.16%", change: "+5.4%", icon: FaEnvelopeOpen },
      { title: "Avg. Click Rate", value: "24.57%", change: "-3.2%", icon: FaMousePointer },
    ],
    "Cultural Programs": [
      { title: "Total Subscribers", value: "12,345", change: "+10", icon: FaUserFriends },
      { title: "Avg. Open Rate", value: "62.3%", change: "+2.1%", icon: FaEnvelopeOpen },
      { title: "Avg. Click Rate", value: "28.9%", change: "-1.0%", icon: FaMousePointer },
    ],
    Workshops: [
      { title: "Total Subscribers", value: "8,765", change: "+50", icon: FaUserFriends },
      { title: "Avg. Open Rate", value: "53.4%", change: "+3.5%", icon: FaEnvelopeOpen },
      { title: "Avg. Click Rate", value: "22.1%", change: "-2.0%", icon: FaMousePointer },
    ],
    // Add more departments...
  };

  return (
    <div className="p-6 bg-gray-100 rounded shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Department-wise Online Engagement</h2>
        <select
          className="border border-gray-300 rounded px-4 py-2"
          value={selectedDepartment}
          onChange={(e) => setSelectedDepartment(e.target.value)}
        >
          <option value="All">All Departments</option>
          <option value="Cultural Programs">Cultural Programs</option>
          <option value="Workshops">Workshops</option>
          {/* Add more options */}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {departmentData[selectedDepartment].map((item, idx) => (
          <div key={idx} className="bg-white rounded-md shadow p-4 flex items-center">
            <item.icon size={32} className="text-blue-500 mr-4" />
            <div>
              <h3 className="text-sm font-semibold">{item.title}</h3>
              <p className="text-2xl font-bold">{item.value}</p>
              <p className={`text-sm ${item.change.startsWith("+") ? "text-green-500" : "text-red-500"}`}>
                {item.change}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialMediaCards;
