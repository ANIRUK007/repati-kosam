import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Dummy credentials
  const dummyUser = {
    email: 'test@example.com',
    password: 'test123'
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError(''); // Clear error when user types
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Check credentials
    if (formData.email === dummyUser.email && formData.password === dummyUser.password) {
      navigate('/dashboard');
    } else {
      setError('Invalid email or password');
    }
  };

  const styles = {
    container: {
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f9fafb'
    },
    formContainer: {
      maxWidth: '400px',
      width: '100%',
      padding: '32px',
      backgroundColor: 'white',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
    },
    title: {
      fontSize: '24px',
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: '24px',
      color: '#111827'
    },
    inputGroup: {
      marginBottom: '16px'
    },
    label: {
      display: 'block',
      marginBottom: '8px',
      fontSize: '14px',
      fontWeight: '500',
      color: '#374151'
    },
    input: {
      width: '100%',
      padding: '8px 12px',
      border: '1px solid #d1d5db',
      borderRadius: '4px',
      fontSize: '14px',
      outline: 'none'
    },
    button: {
      width: '100%',
      padding: '10px',
      backgroundColor: '#4f46e5',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      fontSize: '14px',
      fontWeight: '500',
      cursor: 'pointer'
    },
    error: {
      color: '#dc2626',
      fontSize: '14px',
      textAlign: 'center',
      marginBottom: '16px'
    },
    dummyCredentials: {
      marginTop: '16px',
      padding: '12px',
      backgroundColor: '#f3f4f6',
      borderRadius: '4px',
      fontSize: '14px',
      color: '#374151'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h2 style={styles.title}>Sign in to MergeAndEdit</h2>

        {error && <div style={styles.error}>{error}</div>}
        
        <form onSubmit={handleSubmit}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>
              Email address
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              style={styles.input}
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>
              Password
            </label>
            <input
              type="password"
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
              style={styles.input}
            />
          </div>

          <button type="submit" style={styles.button}>
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;