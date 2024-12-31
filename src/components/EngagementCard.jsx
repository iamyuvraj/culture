import React from 'react';
import { motion } from 'framer-motion';

const EngagementCard = ({ icon: Icon, title, value, change }) => (
  <motion.div
    className="bg-gray-50 rounded-lg shadow p-4 flex items-center space-x-6"
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.3 }}
  >
    <div className="bg-blue-100 p-4 rounded-full">
      <Icon className="text-blue-500 w-6 h-6" />
    </div>
    <div className="flex-grow">
      <h3 className="text-sm font-medium text-gray-500">{title}</h3>
      <p className="text-xl font-semibold text-gray-900">{value}</p>
    </div>
    <p className={`text-sm font-medium ${change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
      {change}
    </p>
  </motion.div>
);

export default EngagementCard;

