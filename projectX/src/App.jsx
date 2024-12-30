// MergeAndEdit: Stylized Frontend Prototype without Login

import React, { useState } from 'react';
import axios from 'axios';
import './App.css'; // Importing CSS for styling

const API_BASE_URL = 'http://localhost:3000'; // Backend URL

function App() {
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);

  // Fetch Projects
  const fetchProjects = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/projects`);
      setProjects(response.data);
    } catch (err) {
      alert('Error fetching projects!');
    }
  };

  // Create Project
  const createProject = async () => {
    try {
      const response = await axios.post(`${API_BASE_URL}/projects`, {
        name: newProject,
        description: 'New Project',
      });
      setProjects([...projects, response.data]);
      alert('Project created successfully!');
      setNewProject('');
    } catch (err) {
      alert('Error creating project!');
    }
  };

  // Select a project
  const selectProject = (project) => {
    setSelectedProject(project);
  };

  return (
    <div className="app-container">
      <aside className="sidebar">
        <div className="user-info">
          <span className="user-icon">👤</span>
          <span className="user-id">User #123</span>
        </div>
        <button className="settings-icon">⚙️</button>
      </aside>

      <main className="main-content">
        <header className="header">
          <input
            type="text"
            className="search-bar"
            placeholder="Search projects..."
          />
          <button className="search-icon">🔍</button>
        </header>

        <section className="project-list">
          {projects.map((project) => (
            <div
              key={project._id}
              className="project-card"
              onClick={() => selectProject(project)}
            >
              <div className="project-preview"></div>
              <div className="project-details">
                <h3>{project.name}</h3>
                <span className="collaborators-icon">👥</span>
              </div>
            </div>
          ))}
        </section>

        <button className="add-project-button" onClick={createProject}>
          ➕
        </button>
      </main>

      {selectedProject && (
        <div className="project-details-modal">
          <h2>Project Details</h2>
          <p><strong>Name:</strong> {selectedProject.name}</p>
          <p><strong>Description:</strong> {selectedProject.description || 'No description available'}</p>
          <p><strong>ID:</strong> {selectedProject._id}</p>
          <button onClick={() => setSelectedProject(null)}>Close</button>
        </div>
      )}
    </div>
  );
}

export default App;