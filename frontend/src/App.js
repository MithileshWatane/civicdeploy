import React from 'react';
import LandingPage from './components/landingpage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Issue from './components/issue.js';
import Trending from './components/trending';
import Community from './components/community';
import Login from './components/login';
import Register from './components/register';
import Dashboard from './components/dashboard';
import Profile from './components/profile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/issue" element={<Issue />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/community" element={<Community />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />

      </Routes>
    </Router>
  );
}

export default App;
