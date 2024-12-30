import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <nav className="bg-white shadow-lg">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex justify-between h-16">
        <div className="flex">
          <Link to="/" className="flex items-center">
            <span className="text-xl font-bold text-indigo-600">MergeAndEdit</span>
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link to="/dashboard" className="text-gray-700 hover:text-indigo-600">Dashboard</Link>
          <Link to="/projects" className="text-gray-700 hover:text-indigo-600">Projects</Link>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-md">
            Sign In
          </button>
        </div>
      </div>
    </div>
  </nav>
);

export default Navigation;