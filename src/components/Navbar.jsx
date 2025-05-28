import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-white font-bold text-2xl">
          TodoApp
        </div>

        {/* Navigation Links */}
        <div className="space-x-6">
          <a href="/" className="text-white hover:text-gray-200">Home</a>
          <a href="/about" className="text-white hover:text-gray-200">About</a>
          <a href="/contact" className="text-white hover:text-gray-200">Contact</a>
        </div>

        {/* Theme toggle or user action */}
        <div className="relative">
          <button className="text-white bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-700 transition">
            Add Todo
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
