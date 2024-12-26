import React from "react";
import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const BarGraph = ({ data }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 w-800">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Activity Report</h2>
      {/* <div className="flex justify-end items-center space-x-3 mb-6">
        {["1D", "1W", "1M", "3M", "6M", "1Y"].map((time, index) => (
          <button
            key={index}
            className={`px-4 py-2 text-sm rounded-full font-medium transition ${
              time === "1Y"
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-blue-600 border border-blue-600"
            }`}
          >
            {time}
          </button>
        ))}
      </div> */}
      <ResponsiveContainer width="100%" height={300}>
        <ComposedChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="department" tick={{ fontSize: 12, fill: "#888" }} />
          <YAxis tick={{ fontSize: 12, fill: "#888" }} />
          <Tooltip />
          {/* Bar Chart */}
          <Bar dataKey="ongoing" fill="#4A90E2" barSize={20} radius={[5, 5, 0, 0]} />
          {/* Line Chart on top of the Bars */}
          <Line type="monotone" dataKey="planned" stroke="#808080" strokeWidth={2} dot={false} />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarGraph;
