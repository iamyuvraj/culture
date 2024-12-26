import React from 'react';

const HeatMap = ({ selectedDepartment }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 h-full">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Engagement Heat Map</h2>
      <div className="bg-gray-200 rounded-lg h-5/6 flex items-center justify-center">
        <p className="text-gray-600">Heat map for {selectedDepartment} would be displayed here</p>
      </div>
    </div>
  );
};

export default HeatMap;
