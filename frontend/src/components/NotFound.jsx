import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="text-center">
      <h1 className="text-6xl font-bold text-indigo-600">404</h1>
      <p className="text-xl text-gray-600 mb-4">Page not found</p>
      <Link 
        to="/" 
        className="text-indigo-600 hover:underline"
      >
        Return to home
      </Link>
    </div>
  </div>
);

export default NotFound;