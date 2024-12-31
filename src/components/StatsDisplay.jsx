import React from "react";

const StatsDisplay = React.memo(({ stats }) => (
  <div className="grid grid-cols-4 gap-4 mb-8">
    {stats.map((stat, index) => (
      <div key={index} className="flex items-center gap-3">
        <div className={`p-2 rounded-full ${stat.bgColor}`}>
          <svg
            className={`w-5 h-5 ${stat.iconColor}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </div>
        <div>
          <p className="text-2xl font-semibold">
            {stat.value.toLocaleString()}
          </p>
          <p className="text-sm text-gray-500">{stat.label}</p>
        </div>
      </div>
    ))}
  </div>
));

export default StatsDisplay;
