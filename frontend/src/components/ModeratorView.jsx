import React, { useState } from "react";

const ModeratorView = () => {
  const [projectName, setProjectName] = useState("");
  const [rawDrafts, setRawDrafts] = useState([]);
  const [collaborators, setCollaborators] = useState([]);
  const [assignments, setAssignments] = useState({});

  // Handle raw draft uploads
  const handleUploadDrafts = (event) => {
    const files = Array.from(event.target.files);
    const newDrafts = files.map((file, index) => ({
      id: rawDrafts.length + index + 1,
      name: file.name,
      url: URL.createObjectURL(file),
    }));
    setRawDrafts((prevDrafts) => [...prevDrafts, ...newDrafts]);
  };

  // Add collaborator
  const handleAddCollaborator = () => {
    const name = prompt("Enter collaborator's name:");
    if (name) {
      setCollaborators((prev) => [...prev, name]);
    }
  };

  // Assign a clip to a collaborator
  const handleAssign = (clipId, collaborator) => {
    setAssignments((prev) => ({
      ...prev,
      [clipId]: collaborator,
    }));
  };

  // Submit assignments
  const handleSubmitAssignments = () => {
    console.log("Project Name:", projectName);
    console.log("Assignments:", assignments);
    alert("Assignments submitted successfully!");
  };

  return (
    <div style={{ padding: "2rem", backgroundColor: "#f3f4f6", minHeight: "100vh" }}>
      <h1 style={{ color: "#1e293b", marginBottom: "1rem" }}>Moderator View</h1>

      {/* Create Project */}
      <div
        style={{
          padding: "1rem",
          backgroundColor: "#ffffff",
          marginBottom: "1rem",
          borderRadius: "8px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2>Create Project</h2>
        <input
          type="text"
          placeholder="Enter project name"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          style={{
            width: "100%",
            padding: "0.5rem",
            marginBottom: "1rem",
            borderRadius: "4px",
            border: "1px solid #d1d5db",
          }}
        />
        <h3>Upload Raw Drafts</h3>
        <input
          type="file"
          multiple
          accept="video/*"
          onChange={handleUploadDrafts}
          style={{
            marginBottom: "1rem",
            padding: "0.5rem",
            backgroundColor: "#4f46e5",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        />
        <div>
          {rawDrafts.length > 0 && (
            <ul>
              {rawDrafts.map((draft) => (
                <li key={draft.id} style={{ marginBottom: "0.5rem" }}>
                  {draft.name}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Add Collaborators */}
      <div
        style={{
          padding: "1rem",
          backgroundColor: "#ffffff",
          marginBottom: "1rem",
          borderRadius: "8px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2>Collaborators</h2>
        <button
          onClick={handleAddCollaborator}
          style={{
            padding: "0.5rem 1rem",
            backgroundColor: "#10b981",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Add Collaborator
        </button>
        <ul style={{ marginTop: "1rem" }}>
          {collaborators.map((collaborator, index) => (
            <li key={index} style={{ marginBottom: "0.5rem" }}>
              {collaborator}
            </li>
          ))}
        </ul>
      </div>

      {/* Assign Clips */}
      <div
        style={{
          padding: "1rem",
          backgroundColor: "#ffffff",
          marginBottom: "1rem",
          borderRadius: "8px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2>Assign Clips to Collaborators</h2>
        {rawDrafts.length === 0 && (
          <p style={{ color: "#9ca3af" }}>Upload raw drafts to assign them.</p>
        )}
        {rawDrafts.map((draft) => (
          <div
            key={draft.id}
            style={{
              marginBottom: "1rem",
              padding: "0.5rem",
              border: "1px solid #d1d5db",
              borderRadius: "4px",
            }}
          >
            <p style={{ marginBottom: "0.5rem" }}>{draft.name}</p>
            <video
              src={draft.url}
              controls
              style={{
                width: "100%",
                maxHeight: "200px",
                marginBottom: "0.5rem",
                borderRadius: "4px",
              }}
            />
            <select
              value={assignments[draft.id] || ""}
              onChange={(e) => handleAssign(draft.id, e.target.value)}
              style={{
                width: "100%",
                padding: "0.5rem",
                borderRadius: "4px",
                border: "1px solid #d1d5db",
              }}
            >
              <option value="" disabled>
                Assign to Collaborator
              </option>
              {collaborators.map((collaborator, index) => (
                <option key={index} value={collaborator}>
                  {collaborator}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>

      {/* Submit Button */}
      <button
        onClick={handleSubmitAssignments}
        style={{
          padding: "0.5rem 1rem",
          backgroundColor: "#4f46e5",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Submit Assignments
      </button>
    </div>
  );
};

export default ModeratorView;
