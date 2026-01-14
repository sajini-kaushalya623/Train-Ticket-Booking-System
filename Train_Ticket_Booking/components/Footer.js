// components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#" className="hover:text-red-400 transition">Contact</a>
          <a href="#" className="hover:text-red-400 transition">Help</a>
          <a href="#" className="hover:text-red-400 transition">Terms</a>
        </div>
        <p className="text-gray-400 text-sm">
          © 2026 Sri Lanka Railways. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;