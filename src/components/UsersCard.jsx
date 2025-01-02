import StatsDisplay from "./StatsDisplay";
import PropTypes from "prop-types";
import WorldMap from "react-svg-worldmap"; // Import WorldMap

const UsersCard = ({ stats, countries }) => {
  // Prepare the data for the WorldMap component
  const mapData = countries.map((country) => ({
    country: country.name.toLowerCase(), // Convert to lowercase country code (e.g. "brazil")
    country: country.code,
    value: country.value, // The value for each country
  }));

  return (
    <div className="bg-white rounded-lg shadow-sm">
      {/* Header and Stats Section - Full Width */}
      <div className="p-6 border-b border-gray-100">
        <h2 className="text-lg font-semibold text-gray-700 mb-6">
          Users By Country
        </h2>
        <StatsDisplay stats={stats} />
      </div>

      {/* Content Section - Split Layout */}
      <div className="flex">
        {/* Left side - Countries List (40%) */}
        <div className="w-full lg:w-2/5 border-r border-gray-100 p-6">
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
        <div className="w-full lg:w-3/5 xl:w-2/3 p-0 h-full">
          {" "}
          {/* Removed padding */}
          <div className="w-full h-full bg-white rounded-lg flex items-center justify-center">
            <WorldMap
              color="blue"
              title="Users"
              valueSuffix="users"
              size="xl"
              data={mapData}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

UsersCard.propTypes = {
  stats: PropTypes.array.isRequired,
  countries: PropTypes.array.isRequired,
};

UsersCard.defaultProps = {
  stats: [],
  countries: [],
};

export default UsersCard;
