import React from 'react';
import { useNavigate } from 'react-router-dom';

const WelcomePage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/signup'); // Redirect to Signup Page
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb' }}>
      {/* Top Section */}
      <div
        style={{
          background: 'linear-gradient(to right, #2563eb, #4f46e5)',
          color: 'white',
          padding: '5rem 0',
          textAlign: 'center',
        }}
      >
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem' }}>
          Git-Like Version Control for Video Editing
        </h1>
        <p style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>
          Collaborate seamlessly with your team on video projects
        </p>
        <button
          onClick={handleGetStarted}
          style={{
            backgroundColor: 'white',
            color: '#4f46e5',
            padding: '0.75rem 2rem',
            borderRadius: '8px',
            fontWeight: '600',
            fontSize: '1rem',
            cursor: 'pointer',
            border: 'none',
            transition: 'background-color 0.2s ease-in-out',
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#e0e7ff')}
          onMouseOut={(e) => (e.target.style.backgroundColor = 'white')}
        >
          Get Started Free
        </button>
      </div>

      {/* Features Section */}
      <div style={{ padding: '5rem 2rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem' }}>
          Why Choose MergeAndEdit?
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
          }}
        >
          {/* Feature Card 1 */}
          <div
            style={{
              backgroundColor: 'white',
              padding: '2rem',
              borderRadius: '8px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            }}
          >
            <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>
              Version Control
            </h3>
            <p style={{ color: '#6b7280' }}>
              Track changes, manage versions, and never lose your work.
            </p>
          </div>
          {/* Feature Card 2 */}
          <div
            style={{
              backgroundColor: 'white',
              padding: '2rem',
              borderRadius: '8px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            }}
          >
            <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>
              Real-Time Collaboration
            </h3>
            <p style={{ color: '#6b7280' }}>
              Edit together in real-time with your team members.
            </p>
          </div>
          {/* Feature Card 3 */}
          <div
            style={{
              backgroundColor: 'white',
              padding: '2rem',
              borderRadius: '8px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            }}
          >
            <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>
              Smart Merging
            </h3>
            <p style={{ color: '#6b7280' }}>
              Resolve conflicts intelligently with our advanced merging system.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
