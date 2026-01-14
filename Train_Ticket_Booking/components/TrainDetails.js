// components/TrainDetails.js
import React, { useState } from 'react';

const TrainDetails = ({ train, onBack, onBookNow }) => {
  const [selectedClass, setSelectedClass] = useState(train.classes[0]);
  
  return (
    <div className="max-w-4xl mx-auto">
      <button
        onClick={onBack}
        className="mb-6 text-red-600 hover:text-red-700 font-semibold flex items-center"
      >
        ← Back to Results
      </button>
      
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">{train.name}</h2>
            <p className="text-gray-600">Train ID: {train.id}</p>
          </div>
          <span className="px-4 py-2 bg-green-100 text-green-800 rounded-lg font-semibold">
            {train.type}
          </span>
        </div>
        
        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-800 mb-3">Running Days</h3>
          <div className="flex gap-2">
            {train.days.map((day, idx) => (
              <span key={idx} className="px-3 py-2 bg-blue-100 text-blue-800 rounded-lg text-sm font-semibold">
                {day}
              </span>
            ))}
          </div>
        </div>
        
        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Route Timeline</h3>
          <div className="relative">
            {train.stops.map((stop, idx) => (
              <div key={idx} className="flex items-center mb-4">
                <div className="relative">
                  <div className={`w-4 h-4 rounded-full ${idx === 0 || idx === train.stops.length - 1 ? 'bg-red-600' : 'bg-gray-400'}`}></div>
                  {idx < train.stops.length - 1 && (
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-gray-300 top-4"></div>
                  )}
                </div>
                <span className="ml-4 text-gray-700 font-medium">{stop}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Available Classes</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {train.classes.map((cls, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedClass(cls)}
                className={`p-4 border-2 rounded-lg cursor-pointer transition ${
                  selectedClass === cls
                    ? 'border-red-600 bg-red-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <p className="font-semibold text-gray-800">{cls}</p>
                <p className="text-sm text-green-600 mt-2">● Available</p>
                <p className="text-lg font-bold text-gray-800 mt-2">
                  LKR {cls.includes('1st') ? '1,500' : cls.includes('2nd') ? '800' : '400'}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        <button
          onClick={() => onBookNow(train, selectedClass)}
          className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-4 rounded-lg font-bold text-lg hover:from-red-700 hover:to-red-800 transition"
        >
          Book Now - {selectedClass}
        </button>
      </div>
    </div>
  );
};

export default TrainDetails;