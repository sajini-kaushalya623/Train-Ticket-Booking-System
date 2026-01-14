// components/Header.js
import React from 'react';
import { Train, Menu } from 'lucide-react';

const Header = ({ onMenuToggle, language, setLanguage }) => {
  return (
    <header className="bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Train className="w-8 h-8" />
            <div>
              <h1 className="text-xl font-bold">Sri Lanka Railways</h1>
              <p className="text-xs text-red-100">Online Booking System</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <select 
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="bg-red-800 text-white px-3 py-1 rounded border border-red-500"
            >
              <option value="EN">English</option>
              <option value="SI">සිංහල</option>
              <option value="TA">தமிழ்</option>
            </select>
            <button className="bg-white text-red-600 px-4 py-2 rounded-lg font-semibold hover:bg-red-50 transition">
              Login / Register
            </button>
          </div>
          
          <button onClick={onMenuToggle} className="md:hidden">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;