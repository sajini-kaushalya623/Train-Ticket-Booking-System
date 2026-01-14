// components/SearchPanel.js
import React, { useState } from 'react';
import { Search, Calendar, Users, MapPin } from 'lucide-react';
import { STATIONS } from '../data/stations';

const SearchPanel = ({ onSearch }) => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');
  const [classType, setClassType] = useState('2nd');
  const [fromSearch, setFromSearch] = useState('');
  const [toSearch, setToSearch] = useState('');

  const filteredFromStations = STATIONS.filter(s => 
    s.name.toLowerCase().includes(fromSearch.toLowerCase())
  );
  
  const filteredToStations = STATIONS.filter(s => 
    s.name.toLowerCase().includes(toSearch.toLowerCase())
  );

  const handleSearch = () => {
    if (!from || !to || !date) {
      alert('Please fill all required fields');
      return;
    }
    if (from === to) {
      alert('From and To stations cannot be the same');
      return;
    }
    onSearch({ from, to, date, classType });
  };

  return (
    <div className="bg-white rounded-xl shadow-2xl p-6 md:p-8 -mt-10 relative z-10 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Search Trains</h2>
      
      <div className="grid md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            <MapPin className="w-4 h-4 inline mr-1" />
            From Station
          </label>
          <input
            type="text"
            placeholder="Search station..."
            value={fromSearch}
            onChange={(e) => setFromSearch(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-2"
          />
          <select
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
          >
            <option value="">Select Station</option>
            {filteredFromStations.map(station => (
              <option key={station.id} value={station.name}>
                {station.name} ({station.line})
              </option>
            ))}
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            <MapPin className="w-4 h-4 inline mr-1" />
            To Station
          </label>
          <input
            type="text"
            placeholder="Search station..."
            value={toSearch}
            onChange={(e) => setToSearch(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-2"
          />
          <select
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
          >
            <option value="">Select Station</option>
            {filteredToStations.map(station => (
              <option key={station.id} value={station.name}>
                {station.name} ({station.line})
              </option>
            ))}
          </select>
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            <Calendar className="w-4 h-4 inline mr-1" />
            Travel Date
          </label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            min={new Date().toISOString().split('T')[0]}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
          />
        </div>
        
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            <Users className="w-4 h-4 inline mr-1" />
            Class
          </label>
          <select
            value={classType}
            onChange={(e) => setClassType(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
          >
            <option value="1st">1st Class (AC)</option>
            <option value="2nd">2nd Class</option>
            <option value="3rd">3rd Class</option>
          </select>
        </div>
      </div>
      
      <button
        onClick={handleSearch}
        className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-4 rounded-lg font-bold text-lg hover:from-red-700 hover:to-red-800 transition flex items-center justify-center"
      >
        <Search className="w-5 h-5 mr-2" />
        Search Trains
      </button>
    </div>
  );
};

export default SearchPanel;