const UsersCard = ({ stats, countries }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm">
      {/* Header and Stats Section - Full Width */}
      <div className="p-6 border-b border-gray-100">
        <h2 className="text-lg font-semibold text-gray-700 mb-6">
          Users By Country
        </h2>
        <div className="grid grid-cols-4 gap-4">
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
      </div>

      {/* Content Section - Split Layout */}
      <div className="flex">
        {/* Left side - Countries List (40%) */}
        <div className="w-[40%] border-r border-gray-100 p-6">
          <div className="space-y-4">
            {countries.map((country, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${country.dotColor}`} />
                  <span className="text-gray-600">{country.name}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-gray-700 font-medium">
                    {country.value.toLocaleString()}
                  </span>
                  <span
                    className={`text-sm ${
                      country.trend > 0 ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {country.trend > 0 ? "↑" : "↓"} {Math.abs(country.trend)}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right side - Map (60%) */}
        <div className="w-[60%] p-6">
          <div className="h-full min-h-[600px] bg-gray-50 rounded-lg flex items-center justify-center">
            <div className="text-gray-400">World Map Component Goes Here</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersCard;
