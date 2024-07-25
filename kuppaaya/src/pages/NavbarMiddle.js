

import React from 'react';

const Navbar = () => {
  return (
    <div>
<nav className="bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <ul className="flex justify-center items-center py-4 space-x-24">
            <li><a href="#" className="text-gray-800 text-sm font-medium">CLOTHES</a></li>
            <li><a href="#" className="text-gray-800 text-sm font-medium">BAGS</a></li>
            <li><a href="#" className="text-gray-800 text-sm font-medium">ACCESSORIES</a></li>
            <li><a href="#" className="text-gray-800 text-sm font-medium">SALE</a></li>
          </ul>
        </div>
      </nav>
      

      <div className="container mx-auto px-4 py-8 flex-grow">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
          <div className="w-full sm:w-1/2 mb-4 sm:mb-0">
            <div className="relative">
              <input type="text" placeholder="SEARCH" className="w-full py-1.5 pl-8 pr-4 border rounded-full text-sm" />
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
          <div className="flex space-x-4">
            <button className="px-4 py-2 border rounded-full flex items-center text-sm">
              SORT
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <button className="px-4 py-2 border rounded-full flex items-center text-sm">
              FILTER
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
            </button>
          </div>
        </div>
        </div>
        </div>
  );
};

export default Navbar;