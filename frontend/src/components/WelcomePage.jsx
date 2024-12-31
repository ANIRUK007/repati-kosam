import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const WelcomePage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/signin');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-bold mb-4">
            Git-Like Version Control for Video Editing
          </h1>
          <p className="text-xl mb-8">
            Collaborate seamlessly with your team on video projects
          </p>
          <button 
            onClick={handleGetStarted}
            className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors"
          >
            Get Started Free
          </button>
        </div>
      </div>
      
      <div className="container mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose MergeAndEdit?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature cards */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Version Control</h3>
            <p className="text-gray-600">Track changes, manage versions, and never lose your work</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Real-Time Collaboration</h3>
            <p className="text-gray-600">Edit together in real-time with your team members</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Smart Merging</h3>
            <p className="text-gray-600">Resolve conflicts intelligently with our advanced merging system</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;