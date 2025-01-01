// EditorDraftReview.jsx
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const EditorDraftReview = () => {
  const { id } = useParams();
  const [userRole] = useState('editor'); // Replace with actual role management
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [draftStatus, setDraftStatus] = useState('pending'); // pending, approved, rejected

  // Mock draft data
  const draftData = {
    title: "Project Alpha - Draft 1",
    editor: "John Doe",
    lastEdited: "2024-01-01",
    duration: "2:45",
    videoUrl: "sample-url"
  };

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([
        ...comments,
        {
          id: comments.length + 1,
          text: newComment,
          user: userRole,
          timestamp: new Date().toISOString()
        }
      ]);
      setNewComment('');
    }
  };

  const handleApprove = () => {
    setDraftStatus('approved');
  };

  const handleReject = () => {
    setDraftStatus('rejected');
  };

  return (
    <div style={{
      display: 'flex',
      height: '100vh',
      backgroundColor: '#f3f4f6'
    }}>
      {/* Video Preview Section */}
      <div style={{
        flex: '2',
        padding: '2rem',
        backgroundColor: '#ffffff'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '2rem'
        }}>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{draftData.title}</h1>
          <div style={{
            display: 'flex',
            gap: '1rem',
            alignItems: 'center'
          }}>
            <span style={{ color: '#666' }}>Status: 
              <span style={{
                color: draftStatus === 'approved' ? '#10b981' : 
                       draftStatus === 'rejected' ? '#ef4444' : '#f59e0b',
                marginLeft: '0.5rem',
                fontWeight: 'bold'
              }}>
                {draftStatus.charAt(0).toUpperCase() + draftStatus.slice(1)}
              </span>
            </span>
            {userRole === 'viewer' && (
              <div style={{ display: 'flex', gap: '1rem' }}>
                <button
                  onClick={handleApprove}
                  style={{
                    backgroundColor: '#10b981',
                    color: 'white',
                    padding: '0.5rem 1rem',
                    borderRadius: '4px',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                >
                  Approve
                </button>
                <button
                  onClick={handleReject}
                  style={{
                    backgroundColor: '#ef4444',
                    color: 'white',
                    padding: '0.5rem 1rem',
                    borderRadius: '4px',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                >
                  Reject
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Video Player */}
        <div style={{
          backgroundColor: '#000',
          aspectRatio: '16/9',
          marginBottom: '2rem'
        }}>
          <video
            width="100%"
            height="100%"
            controls
            style={{ backgroundColor: '#000' }}
          >
            <source src={draftData.videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Draft Details */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '2rem',
          backgroundColor: '#f8fafc',
          padding: '1rem',
          borderRadius: '8px'
        }}>
          <div>
            <h3 style={{ color: '#666', marginBottom: '0.5rem' }}>Editor</h3>
            <p>{draftData.editor}</p>
          </div>
          <div>
            <h3 style={{ color: '#666', marginBottom: '0.5rem' }}>Last Edited</h3>
            <p>{draftData.lastEdited}</p>
          </div>
          <div>
            <h3 style={{ color: '#666', marginBottom: '0.5rem' }}>Duration</h3>
            <p>{draftData.duration}</p>
          </div>
        </div>
      </div>

      {/* Comments Section */}
      <div style={{
        flex: '1',
        padding: '2rem',
        backgroundColor: '#f8fafc',
        borderLeft: '1px solid #e5e7eb',
        overflowY: 'auto'
      }}>
        <h2 style={{ 
          fontSize: '1.25rem', 
          fontWeight: 'bold',
          marginBottom: '1.5rem'
        }}>
          Review Comments
        </h2>

        {/* Comments List */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          marginBottom: '2rem'
        }}>
          {comments.map(comment => (
            <div
              key={comment.id}
              style={{
                backgroundColor: 'white',
                padding: '1rem',
                borderRadius: '8px',
                boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
              }}
            >
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '0.5rem'
              }}>
                <span style={{ fontWeight: 'bold' }}>
                  {comment.user === 'editor' ? 'Editor' : 'Reviewer'}
                </span>
                <span style={{ color: '#666', fontSize: '0.875rem' }}>
                  {new Date(comment.timestamp).toLocaleString()}
                </span>
              </div>
              <p>{comment.text}</p>
            </div>
          ))}
        </div>

        {/* Add Comment */}
        <div style={{
          position: 'sticky',
          bottom: 0,
          backgroundColor: '#f8fafc',
          padding: '1rem 0'
        }}>
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Add a comment..."
            style={{
              width: '100%',
              padding: '0.75rem',
              borderRadius: '4px',
              border: '1px solid #e5e7eb',
              marginBottom: '1rem',
              minHeight: '100px',
              resize: 'vertical'
            }}
          />
          <button
            onClick={handleAddComment}
            style={{
              backgroundColor: '#4f46e5',
              color: 'white',
              padding: '0.75rem 1rem',
              borderRadius: '4px',
              border: 'none',
              cursor: 'pointer',
              width: '100%'
            }}
          >
            Add Comment
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditorDraftReview;