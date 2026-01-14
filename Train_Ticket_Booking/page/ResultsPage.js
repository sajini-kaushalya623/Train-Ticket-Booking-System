// pages/ResultsPage.js
import React from 'react';
import TrainCard from '../components/TrainCard';

const ResultsPage = ({ searchResults, onBack, onViewDetails }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <button
        onClick={onBack}
        className="mb-6 text-red-600 hover:text-red-700 font-semibold"
      >
        ← Back to Search
      </button>
      
      <h2 className="text-3xl font-bold text-gray-800 mb-2">Available Trains</h2>
      <p className="text-gray-600 mb-8">Found {searchResults.length} train(s)</p>
      
      {searchResults.length === 0 ? (
        <div className="bg-white rounded-lg shadow-md p-12 text-center">
          <p className="text-gray-600 text-lg">No trains available for this route</p>
          <p className="text-gray-500 mt-2">Please try a different route or date</p>
        </div>
      ) : (
        <div className="grid gap-6">
          {searchResults.map((train) => (
            <TrainCard
              key={train.id}
              train={train}
              onViewDetails={onViewDetails}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ResultsPage;