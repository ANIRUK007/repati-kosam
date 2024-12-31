import React from 'react';
import { useNavigate } from 'react-router-dom';

const SignUpPage = () => {
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    // Add signup logic here
    alert('Signup successful!');
    navigate('/signin'); // Redirect to SignIn Page after successful signup
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#f9fafb',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem',
      }}
    >
      <div
        style={{
          backgroundColor: 'white',
          padding: '2rem',
          borderRadius: '12px',
          boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
          maxWidth: '400px',
          width: '100%',
        }}
      >
        <h2
          style={{
            textAlign: 'center',
            fontSize: '1.75rem',
            fontWeight: 'bold',
            color: '#4f46e5',
            marginBottom: '1rem',
          }}
        >
          Create Your Account
        </h2>
        <p
          style={{
            textAlign: 'center',
            fontSize: '1rem',
            color: '#6b7280',
            marginBottom: '2rem',
          }}
        >
          Start collaborating on video projects today.
        </p>
        <form onSubmit={handleSignUp}>
          <div style={{ marginBottom: '1rem' }}>
            <label
              htmlFor="name"
              style={{
                display: 'block',
                fontSize: '0.875rem',
                color: '#374151',
                marginBottom: '0.5rem',
              }}
            >
              Full Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter your full name"
              required
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid #d1d5db',
                borderRadius: '8px',
                fontSize: '1rem',
                color: '#374151',
              }}
            />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label
              htmlFor="email"
              style={{
                display: 'block',
                fontSize: '0.875rem',
                color: '#374151',
                marginBottom: '0.5rem',
              }}
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              required
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid #d1d5db',
                borderRadius: '8px',
                fontSize: '1rem',
                color: '#374151',
              }}
            />
          </div>
          <div style={{ marginBottom: '1.5rem' }}>
            <label
              htmlFor="password"
              style={{
                display: 'block',
                fontSize: '0.875rem',
                color: '#374151',
                marginBottom: '0.5rem',
              }}
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              required
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid #d1d5db',
                borderRadius: '8px',
                fontSize: '1rem',
                color: '#374151',
              }}
            />
          </div>
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '0.75rem',
              backgroundColor: '#4f46e5',
              color: 'white',
              fontSize: '1rem',
              fontWeight: '600',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'background-color 0.2s ease-in-out',
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = '#3b38c5')}
            onMouseOut={(e) => (e.target.style.backgroundColor = '#4f46e5')}
          >
            Sign Up
          </button>
        </form>
        <p
          style={{
            textAlign: 'center',
            fontSize: '0.875rem',
            color: '#6b7280',
            marginTop: '1rem',
          }}
        >
          Already have an account?{' '}
          <span
            onClick={() => navigate('/signin')}
            style={{
              color: '#4f46e5',
              cursor: 'pointer',
              textDecoration: 'underline',
            }}
          >
            Sign In
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
