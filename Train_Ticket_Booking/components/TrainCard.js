// components/TrainCard.js
import React from 'react';
import { Train, Clock, ChevronRight } from 'lucide-react';

const TrainCard = ({ train, onViewDetails }) => {
  const getTypeColor = (type) => {
    switch(type) {
      case 'Intercity': return 'bg-blue-100 text-blue-800';
      case 'Express': return 'bg-green-100 text-green-800';
      case 'Special Express': return 'bg-purple-100 text-purple-800';
      case 'Night Mail': return 'bg-indigo-100 text-indigo-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition p-6 border border-gray-200">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold text-gray-800">{train.name}</h3>
          <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mt-2 ${getTypeColor(train.type)}`}>
            {train.type}
          </span>
        </div>
        <Train className="w-8 h-8 text-red-600" />
      </div>
      
      <div className="space-y-3 mb-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">Departure</p>
            <p className="text-lg font-bold text-gray-800">{train.departure}</p>
            <p className="text-sm text-gray-600">{train.from}</p>
          </div>
          <div className="flex-1 mx-4">
            <div className="border-t-2 border-dashed border-gray-300 relative">
              <Clock className="w-4 h-4 text-gray-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white" />
            </div>
            <p className="text-center text-sm text-gray-600 mt-1">{train.duration}</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-600">Arrival</p>
            <p className="text-lg font-bold text-gray-800">{train.arrival}</p>
            <p className="text-sm text-gray-600">{train.to}</p>
          </div>
        </div>
      </div>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {train.classes.map((cls, idx) => (
          <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-xs">
            {cls}
          </span>
        ))}
      </div>
      
      <button
        onClick={() => onViewDetails(train)}
        className="w-full bg-red-600 text-white py-2 rounded-lg font-semibold hover:bg-red-700 transition flex items-center justify-center"
      >
        View Details
        <ChevronRight className="w-4 h-4 ml-1" />
      </button>
    </div>
  );
};

export default TrainCard;