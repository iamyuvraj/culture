// Card1.jsx
import React from 'react';

import { FaWallet, FaTasks, FaCalendarAlt, FaCheckCircle } from 'react-icons/fa';
const Card1 = ({ 
  title, 
  earning, 
  ongoing, 
  planned, 
  completed, 
  departmentIcon: DepartmentIcon 
}) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="p-2 bg-purple-100 rounded-full">
            <DepartmentIcon className="text-purple-500" size={24} />
          </div>
          <div>
            <h6 className="text-sm font-bold">{title}</h6>
            {/* <h5 className="text-sm text-gray-500">{title}</h5> */}
          </div>
        </div>
        {/* <div className="text-green-500 text-sm flex items-center">
          <span className="text-lg font-bold">+2.02%</span>
        </div> */}
      </div>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-center mr-4">
        <div>
          <div className="p-2 bg-blue-100 rounded-full inline-block">
            <FaTasks className="text-blue-500" size={10} />
          </div>
          <h3 className="text-lg font-semibold mt-2">{ongoing}</h3>
          <p className="text-sm text-gray-500">Ongoing</p>
        </div>
        <div>
          <div className="p-2 bg-yellow-100 rounded-full inline-block">
            <FaCalendarAlt className="text-yellow-500" size={10} />
          </div>
          <h3 className="text-lg font-semibold mt-2">{planned}</h3>
          <p className="text-sm text-gray-500">Planned</p>
        </div>
        <div>
          <div className="p-2 bg-green-100 rounded-full inline-block">
            <FaCheckCircle className="text-green-500" size={10} />
          </div>
          <h3 className="text-lg font-semibold mt-2">{completed}</h3>
          <p className="text-sm text-gray-500">Completed</p>
        </div>
      </div>
    </div>
  );
};

export default Card1;
