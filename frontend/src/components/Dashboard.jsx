// components/Dashboard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => (
  <div className="container mx-auto px-4 py-8">
    <h1 className="text-3xl font-bold mb-6">Your Projects</h1>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Project Cards */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold mb-2">Project Title</h3>
        <p className="text-gray-600 mb-4">Last edited 2 hours ago</p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">3 collaborators</span>
          <Link 
            to="/editor/1" 
            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
          >
            Open
          </Link>
        </div>
      </div>
      {/* Add more project cards as needed */}
    </div>
  </div>
);

export default Dashboard;