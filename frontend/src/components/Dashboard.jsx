import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  // User icon SVG as a component
  const UserIcon = ({ offset }) => (
    <div style={{
      width: '32px',
      height: '32px',
      backgroundColor: '#4f46e5',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: '2px solid white',
      marginLeft: offset ? '-8px' : '0', // Overlap effect
      position: 'relative', // For stacking context
    }}>
      <svg 
        style={{
          width: '20px',
          height: '20px',
          fill: 'white',
        }}
        viewBox="0 0 24 24"
      >
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
      </svg>
    </div>
  );

  return (
    <div style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '32px 16px'
    }}>
      <h1 style={{
        fontSize: '1.875rem',
        fontWeight: 'bold',
        marginBottom: '24px'
      }}>
        Your Projects
      </h1>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '24px'
      }}>
        {/* Project Card */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          padding: '24px'
        }}>
          <h3 style={{
            fontSize: '1.25rem',
            fontWeight: '600',
            marginBottom: '8px'
          }}>
            Stepen wolf
          </h3>
          
          <p style={{
            color: '#666',
            marginBottom: '16px'
          }}>
            Last edited 2 hours ago
          </p>
          
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              position: 'relative',
            }}>
              {/* Multiple user icons with overlap effect */}
              <UserIcon offset={false} />
              <UserIcon offset={true} />
              <UserIcon offset={true} />
              <div style={{
                marginLeft: '8px',
                color: '#666',
                fontSize: '0.875rem'
              }}>
                3 collaborators
              </div>
            </div>
            
            <Link 
              to="/editor/1" 
              style={{
                backgroundColor: '#4f46e5',
                color: 'white',
                padding: '8px 16px',
                borderRadius: '6px',
                textDecoration: 'none',
                transition: 'background-color 0.2s',
                cursor: 'pointer'
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#4338ca'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#4f46e5'}
            >
              Open
            </Link>
          </div>
        </div>
        
        {/* You can add more project cards here */}
      </div>
    </div>
  );
};

export default Dashboard;