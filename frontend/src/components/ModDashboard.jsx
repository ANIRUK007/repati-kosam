import React from "react";
import { useNavigate } from "react-router-dom";

const ModDashboard = () => {
  const navigate = useNavigate();

  const handleCreateProject = () => {
    navigate("/moderator-view"); // Redirect to the Moderator View
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: "100vh",
        padding: "2rem",
        backgroundColor: "#f9fafb",
      }}
    >
      {/* ModDashboard Header */}
      <div>
        <h1
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            color: "#1e293b",
            marginBottom: "1rem",
          }}
        >
          Moderator Dashboard
        </h1>
        <p
          style={{
            fontSize: "1rem",
            color: "#4b5563",
          }}
        >
          Welcome to the MergeAndEdit platform! Use the button below to create a new project.
        </p>
      </div>

      {/* Floating Create Project Button */}
      <button
        onClick={handleCreateProject}
        style={{
          position: "fixed",
          bottom: "2rem",
          right: "2rem",
          padding: "1rem 2rem",
          backgroundColor: "#4f46e5",
          color: "white",
          fontSize: "1rem",
          fontWeight: "bold",
          border: "none",
          borderRadius: "50px",
          cursor: "pointer",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        Create Project
      </button>
    </div>
  );
};

export default ModDashboard;
