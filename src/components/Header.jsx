import React from 'react';
import { Menu } from '@headlessui/react';
import { FiChevronDown, FiSettings } from 'react-icons/fi';
import { AiFillHome } from 'react-icons/ai';
import { FaTools, FaFileAlt } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      {/* Top Row */}
      <div className="flex justify-between items-center p-4">
      <div className="flex items-center space-x-4 ml-6"> {/* Increased left spacing with ml-6 */}
        {/* Ministry of Culture Icon */}
        <div className="text-2xl font-bold text-blue-500 flex items-center space-x-2">
          <img
            src="https://www.indiaculture.gov.in/sites/all/themes/moc/logo.png"
            alt="Ministry of Culture Logo"
            className="w-52 h-16" 
          />
        </div>
      </div>

        {/* Right Controls */}
        <div className="flex items-center space-x-4">
          <img
            src="https://www.indiaculture.gov.in/sites/all/themes/moc/images/Gajendra_Singh_Shekhawat_13062024.jpg"
            alt="User Avatar"
            className="w-12 h-12 rounded-full"
          />
          <FiSettings className="w-5 h-5 text-gray-600" />
        </div>
      </div>
      {/* Divider */}
      <div className="border-t border-gray-200"></div>
      {/* Bottom Row (Navigation Menu) */}
      <div className="bg-gray-50 px-8 py-4">
        <nav className="flex items-center space-x-8">
          {/* Home Menu */}
          <Menu as="div" className="relative inline-block text-left">
            <div className="group">
              <Menu.Button className="inline-flex justify-center items-center space-x-1 text-gray-600 hover:text-blue-500">
              <a href="/">
                <span className="flex items-center space-x-2">
                  <AiFillHome className="w-5 h-5" />
                  <span className="font-bold">Home</span>
                </span>
                </a>
              </Menu.Button>
            </div>
          </Menu>

          {/* Master Menu */}
          <Menu as="div" className="relative inline-block text-left">
            <div className="group">
              <Menu.Button className="inline-flex justify-center items-center space-x-1 text-gray-600 hover:text-blue-500">
                <span className="flex items-center space-x-2">
                  <FaTools className="w-5 h-5" />
                  <span className="font-bold">Master</span>
                </span>
                <FiChevronDown className="w-4 h-4" />
              </Menu.Button>
              <div className="absolute z-10 mt-0 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 hidden group-hover:block">
                <div className="py-1">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Submenu Item 1
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Submenu Item 2
                  </a>
                </div>
              </div>
            </div>
          </Menu>

          {/* Reports Menu */}
          <Menu as="div" className="relative inline-block text-left">
            <div className="group">
              <Menu.Button className="inline-flex justify-center items-center space-x-1 text-gray-600 hover:text-blue-500">
                <span className="flex items-center space-x-2">
                  <FaFileAlt className="w-5 h-5" />
                  <span className="font-bold">Reports</span>
                </span>
                <FiChevronDown className="w-4 h-4" />
              </Menu.Button>
              <div className="absolute z-10 mt-0 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 hidden group-hover:block">
                <div className="py-1">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
                  >
                    Submenu Item 1
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Submenu Item 2
                  </a>
                </div>
              </div>
            </div>
          </Menu>
        </nav>
      </div>
    </header>
  );
};

export default Header;
