import React, { useState } from 'react';
import SocialMediaCards from './SocialMediaCards';
import HeatMap from './Heatmap';

const SocialMediaDashboard = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('All');

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="w-2/5 p-2 overflow-y-auto">
        <SocialMediaCards
          selectedDepartment={selectedDepartment}
          setSelectedDepartment={setSelectedDepartment}
        />
      </div>
      <div className="w-3/5 p-2">
        <HeatMap selectedDepartment={selectedDepartment} />
      </div>
    </div>
  );
};

export default SocialMediaDashboard;

