import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from './sidebar'; // Assume Sidebar is your collapsible sidebar component

const VideoEditor = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [timeline, setTimeline] = useState([]);
  const [currentTime, setCurrentTime] = useState(0);
  const videoRef = useRef(null);

  const navigate = useNavigate();

  const handleVideoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const videoUrl = URL.createObjectURL(file);
      setSelectedVideo(videoUrl);
      setTimeline([{ id: 1, url: videoUrl, startTime: 0, duration: 0 }]);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  return (
    <div style={{ display: 'flex', height: '130vh', backgroundColor: '#0f172a' }}>
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Top Bar */}
        <div
          style={{
            padding: '1rem',
            backgroundColor: '#1e293b',
            color: 'white',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.25)',
          }}
        >
          <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#94a3b8' }}>Video Editor</h1>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button
              onClick={() => navigate(`/editor/1/review`)}
              style={{
                backgroundColor: '#4f46e5',
                color: 'white',
                padding: '10px 20px',
                borderRadius: '6px',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                fontWeight: 'bold',
              }}
            >
              Submit for Review
            </button>
            <button
              style={{
                backgroundColor: '#10b981',
                color: 'white',
                padding: '10px 20px',
                borderRadius: '6px',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                fontWeight: 'bold',
              }}
            >
              Export
            </button>
          </div>
        </div>

        {/* Main Video and Timeline */}
        <div style={{ flex: 1, display: 'flex', padding: '1rem', gap: '1rem' }}>
          {/* Video Preview */}
          <div
            style={{
              flex: 1,
              backgroundColor: '#1e293b',
              borderRadius: '8px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.25)',
            }}
          >
            {selectedVideo ? (
              <video
                ref={videoRef}
                src={selectedVideo}
                style={{
                  maxWidth: '100%',
                  maxHeight: 'calc(100% - 50px)',
                  backgroundColor: '#000',
                  borderRadius: '8px',
                }}
                controls
                onTimeUpdate={handleTimeUpdate}
              />
            ) : (
              <div style={{ color: '#94a3b8', fontSize: '1.2rem', fontStyle: 'italic' }}>
                Upload a video to start editing
              </div>
            )}
          </div>

          {/* Raw Footage Space */}
          <div
            style={{
              flex: 0.4,
              backgroundColor: '#1e293b',
              borderRadius: '8px',
              display: 'flex',
              flexDirection: 'column',
              padding: '1rem',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.25)',
              color: 'white',
              overflow: 'auto',
            }}
          >
            <h3 style={{ color: '#94a3b8', marginBottom: '1rem' }}>Raw Footage</h3>
            <input
              type="file"
              accept="video/*"
              onChange={handleVideoUpload}
              style={{
                marginBottom: '1rem',
                color: 'white',
                backgroundColor: '#4f46e5',
                border: 'none',
                padding: '0.3rem 0.5rem',
                borderRadius: '4px',
                cursor: 'pointer',
                width: 'fit-content',
              }}
            />
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
            }}>
              {timeline.map((clip, index) => (
                <div
                  key={index}
                  style={{
                    padding: '0.5rem',
                    backgroundColor: '#334155',
                    borderRadius: '6px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    color: 'white',
                  }}
                >
                  <span>{`Clip ${clip.id}`}</span>
                  <button
                    style={{
                      backgroundColor: '#ef4444',
                      color: 'white',
                      padding: '0.2rem 0.5rem',
                      borderRadius: '4px',
                      border: 'none',
                      cursor: 'pointer',
                    }}
                    onClick={() => {
                      setTimeline(timeline.filter((_, i) => i !== index));
                    }}
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div
          style={{
            height: '150px',
            backgroundColor: '#1e293b',
            margin: '1rem',
            borderRadius: '8px',
            padding: '1rem',
            color: 'white',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.25)',
          }}
        >
          <h3 style={{ marginBottom: '1rem', color: '#94a3b8' }}>Timeline</h3>
          <div
            style={{
              height: '80px',
              backgroundColor: '#2d3748',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              padding: '0.5rem',
              position: 'relative',
              overflowX: 'scroll',
            }}
          >
            {timeline.map((clip) => (
              <div
                key={clip.id}
                style={{
                  backgroundColor: '#4f46e5',
                  height: '60px',
                  minWidth: '100px',
                  borderRadius: '6px',
                  margin: '0 0.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: 'bold',
                }}
              >
                {`Clip ${clip.id}`}
              </div>
            ))}
            {/* Timeline Cursor */}
            <div
              style={{
                position: 'absolute',
                left: `${(currentTime / (videoRef.current?.duration || 1)) * 100}%`,
                height: '100%',
                width: '2px',
                backgroundColor: 'red',
                top: 0,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoEditor;
