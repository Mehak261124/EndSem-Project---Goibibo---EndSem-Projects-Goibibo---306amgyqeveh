import React from 'react';
import 'tailwindcss/tailwind.css';

export default function SortBy() {
  return (
    <div className="mt-4 flex items-center"> 
      <h1 className="mr-4"><b>Sort by:</b></h1> 
      <div className="flex items-center space-x-2"> 
        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-3 border border-blue-500 hover:border-transparent rounded-full">
          Price (Low to High)
        </button>
        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-3 border border-blue-500 hover:border-transparent rounded-full">
          Price (High to Low)
        </button>
        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-3 border border-blue-500 hover:border-transparent rounded-full">
          Customer Ratings (High to Low)
        </button>
        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-3 border border-blue-500 hover:border-transparent rounded-full">
          Customer Ratings (Low to High)
        </button>
      </div>
    </div>
  );
}
