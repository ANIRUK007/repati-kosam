import React from "react";

const ProjectsPage = () => {
  const ongoingProjects = [
    { id: 1, name: "Collaborative Video Editor", status: "Ongoing" },
    { id: 2, name: "Smart Merging Algorithm", status: "Ongoing" },
  ];

  const completedProjects = [
    { id: 3, name: "Version Control System Prototype", status: "Completed" },
    { id: 4, name: "Real-Time Sync Module", status: "Completed" },
  ];

  const renderStatusIcon = (status) => {
    return status === "Ongoing" ? (
      <span
        style={{
          display: "inline-block",
          width: "12px",
          height: "12px",
          backgroundColor: "#f59e0b", // Amber for ongoing
          borderRadius: "50%",
          marginRight: "8px",
        }}
      ></span>
    ) : (
      <span
        style={{
          display: "inline-block",
          width: "12px",
          height: "12px",
          backgroundColor: "#10b981", // Green for completed
          borderRadius: "50%",
          marginRight: "8px",
        }}
      ></span>
    );
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "2rem",
        backgroundColor: "#f9fafb",
        fontFamily: "'Arial', sans-serif",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "2rem",
          fontWeight: "bold",
          color: "#4f46e5",
          marginBottom: "1.5rem",
        }}
      >
        Projects Overview
      </h1>
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          backgroundColor: "white",
          padding: "2rem",
          borderRadius: "12px",
          boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
        }}
      >
        {/* Ongoing Projects */}
        <div style={{ marginBottom: "2rem" }}>
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              color: "#374151",
              marginBottom: "1rem",
            }}
          >
            Ongoing Projects
          </h2>
          {ongoingProjects.map((project) => (
            <div
              key={project.id}
              style={{
                display: "flex",
                alignItems: "center",
                padding: "0.75rem 0",
                borderBottom: "1px solid #e5e7eb",
              }}
            >
              {renderStatusIcon(project.status)}
              <p style={{ fontSize: "1rem", color: "#374151" }}>
                {project.name}
              </p>
            </div>
          ))}
        </div>

        {/* Completed Projects */}
        <div>
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              color: "#374151",
              marginBottom: "1rem",
            }}
          >
            Completed Projects
          </h2>
          {completedProjects.map((project) => (
            <div
              key={project.id}
              style={{
                display: "flex",
                alignItems: "center",
                padding: "0.75rem 0",
                borderBottom: "1px solid #e5e7eb",
              }}
            >
              {renderStatusIcon(project.status)}
              <p style={{ fontSize: "1rem", color: "#374151" }}>
                {project.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
