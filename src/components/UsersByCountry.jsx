import StatsDisplay from './StatsDisplay';

const UsersByCountry = ({ stats, countries }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      {/* <h2 className="text-lg font-semibold text-gray-700 mb-6">
        Users By Country
      </h2> */}

      {/* Stats Section */}
      <StatsDisplay stats={stats} />

      {/* Countries List */}
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
  );
};

export default UsersByCountry;
