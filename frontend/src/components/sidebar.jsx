import React, { useState } from 'react';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div
      style={{
        width: isCollapsed ? '60px' : '200px',
        backgroundColor: '#1e293b',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: isCollapsed ? 'center' : 'flex-start',
        transition: 'width 0.3s ease',
        padding: isCollapsed ? '1rem 0' : '1rem',
        boxShadow: '2px 0 5px rgba(0, 0, 0, 0.2)',
        overflow: 'hidden',
      }}
    >
      {/* Toggle Button */}
      <button
        onClick={toggleSidebar}
        style={{
          backgroundColor: '#4f46e5',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          padding: '0.5rem',
          cursor: 'pointer',
          marginBottom: '1rem',
          alignSelf: isCollapsed ? 'center' : 'flex-end',
        }}
      >
        {isCollapsed ? '>' : '<'}
      </button>

      {/* Sidebar Options */}
      {!isCollapsed && (
        <div
          style={{
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            width: '100%',
          }}
        >
          <div style={{ padding: '0.5rem', textAlign: 'left' }}>Transitions</div>
          <div style={{ padding: '0.5rem', textAlign: 'left' }}>Text</div>
          <div style={{ padding: '0.5rem', textAlign: 'left' }}>Chroma</div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
