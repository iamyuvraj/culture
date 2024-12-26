import React from "react";

const RecentActivities = ({ activities }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 w-full max-w-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Recent Activities</h2>
        <button className="text-sm text-blue-500 hover:underline">View All</button>
      </div>
      <ul className="space-y-4">
        {activities.map((activity, index) => (
          <li key={index} className="flex items-start space-x-3">
            {/* Status Indicator */}
            <div
              className={`w-3 h-3 rounded-full mt-1 ${
                activity.color || "bg-gray-400"
              }`}
            ></div>
            {/* Activity Details */}
            <div className="flex-1">
              <p className="text-sm text-gray-700">
                {activity.description}{" "}
                {activity.link && (
                  <a href={activity.link} className="text-blue-500 hover:underline">
                    {activity.linkText}
                  </a>
                )}
              </p>
              {activity.subText && (
                <p className="text-xs text-gray-500">{activity.subText}</p>
              )}
            </div>
            {/* Time */}
            <div className="text-xs text-gray-400">{activity.time}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentActivities;
