import React from 'react';
import { FaUserFriends, FaEnvelopeOpen, FaMousePointer } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import EngagementCard from './EngagementCard';

const departmentData = {
  All: [
    { title: 'Likes', value: '71,897', change: '+122', icon: FaUserFriends },
    { title: 'Comments', value: '5,823', change: '+53', icon: FaEnvelopeOpen },
    { title: 'Shares', value: '2,457', change: '-34', icon: FaMousePointer },
  ],
  'Anthropological Survey of India': [
    { title: 'Likes', value: '12,345', change: '+10', icon: FaUserFriends },
    { title: 'Comments', value: '623', change: '+2', icon: FaEnvelopeOpen },
    { title: 'Shares', value: '289', change: '-13', icon: FaMousePointer },
  ],
  'Central Reference Library': [
    { title: 'Likes', value: '8,765', change: '+50', icon: FaUserFriends },
    { title: 'Comments', value: '534', change: '+33', icon: FaEnvelopeOpen },
    { title: 'Shares', value: '22', change: '-20', icon: FaMousePointer },
  ],
};

const SocialMediaCards = ({ selectedDepartment, setSelectedDepartment }) => {
  return (
    <div className="bg-white rounded-xl shadow-md">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Department-wise Online Engagement</h2>
        <select
          className="w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-2 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={selectedDepartment}
          onChange={(e) => setSelectedDepartment(e.target.value)}
        >
          {Object.keys(departmentData).map((dept) => (
            <option key={dept} value={dept}>
              {dept === 'All' ? 'All Departments' : dept}
            </option>
          ))}
        </select>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={selectedDepartment}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="space-y-4 p-6"
        >
          {departmentData[selectedDepartment].map((item, idx) => (
            <EngagementCard key={`${selectedDepartment}-${idx}`} {...item} />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default SocialMediaCards;

