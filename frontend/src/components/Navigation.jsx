import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navigation = () => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate('/signin');
  };

  // Add this function to handle Projects navigation
  const handleProjects = () => {
    navigate('/projects');
  };

  return (
    <nav style={{ backgroundColor: 'white', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 16px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', height: '64px', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Link to="/" style={{ textDecoration: 'none', color: '#4f46e5', fontWeight: 'bold', fontSize: '20px' }}>
              MergeAndEdit
            </Link>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <Link to="/dashboard" style={{ textDecoration: 'none', color: '#4a5568' }}>Dashboard</Link>
            <button 
              onClick={handleProjects}
              style={{
                backgroundColor: 'white',
                color: '#4a5568',
                padding: '8px 16px',
                borderRadius: '6px',
                border: 'none',
                cursor: 'pointer',
                marginRight: '8px'
              }}
            >
              Projects
            </button>
            <button 
              onClick={handleSignIn}
              style={{
                backgroundColor: '#4f46e5',
                color: 'white',
                padding: '8px 16px',
                borderRadius: '6px',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;