// pages/HomePage.js
import React from 'react';
import SearchPanel from '../components/SearchPanel';
import { POPULAR_ROUTES } from '../data/stations';

const HomePage = ({ onSearch }) => {
  return (
    <>
      <div className="bg-gradient-to-br from-red-600 to-red-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Book Your Journey
          </h2>
          <p className="text-xl text-red-100">
            Experience the scenic beauty of Sri Lanka by rail
          </p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4">
        <SearchPanel onSearch={onSearch} />
        
        <div className="mt-16 mb-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Popular Routes</h3>
          <div className="grid md:grid-cols-4 gap-4">
            {POPULAR_ROUTES.map((route, idx) => (
              <div
                key={idx}
                onClick={() => onSearch({ 
                  from: route.from, 
                  to: route.to, 
                  date: new Date().toISOString().split('T')[0], 
                  classType: '2nd' 
                })}
                className="bg-white rounded-lg shadow-md p-6 text-center cursor-pointer hover:shadow-xl transition"
              >
                <div className="text-4xl mb-3">{route.icon}</div>
                <p className="text-sm text-gray-600">From</p>
                <p className="font-bold text-gray-800">{route.from}</p>
                <p className="text-sm text-gray-600 mt-2">To</p>
                <p className="font-bold text-gray-800">{route.to}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;