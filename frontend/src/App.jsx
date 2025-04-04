import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import WelcomePage from './components/WelcomePage';
import Dashboard from './components/Dashboard';
import VideoEditor from './components/VideoEditor';
import NotFound from './components/NotFound';
import SignIn from './components/SignIn';
import SignUpPage from './components/signup';
import ProjectsPage from './components/ProjectsPage'; 
import EditorDraftReview from './components/EditorDraftReview';
import ModDashboard from "./components/ModDashboard";
import ModeratorView from './components/ModeratorView';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/editor/:projectId" element={<VideoEditor />} />
          <Route path="/editor/:projectId/review" element={<EditorDraftReview />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/editor/:projectId" element={<VideoEditor />} />
          <Route path="/mod-dashboard" element={<ModDashboard />} />
          <Route path="/moderator" element={<ModeratorView />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

// Render the app
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);

export default App;