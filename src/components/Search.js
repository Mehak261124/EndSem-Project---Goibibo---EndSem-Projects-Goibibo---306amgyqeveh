import React from 'react';
import 'tailwindcss/tailwind.css';
// import SortBy from './SortBy';

const Search = () => {
  return (
    
    <nav className="flex items-center justify-between bg-orange-500 p-4 shadow-md">
      <div className="flex items-center space-x-4">
        <p className="text-white text-2xl font-bold">CITY</p>
        <div className="flex items-center bg-white rounded-md overflow-hidden w-96">
          
          <input
            type="text"
            className="flex-grow p-2 text-gray-700 focus:outline-none"
            placeholder="Search Here"
          />
        </div>
      </div>
      
      <button className="bg-white text-blue-500 p-2 w-40 rounded-md  transition">
        <b>Search</b>
      </button>
    </nav>
    
  );
}

export default Search;
