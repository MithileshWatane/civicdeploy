import React, { useState, useEffect } from 'react';
import './styles/community.css';
import { Link , Navigate} from 'react-router-dom';
import axios from 'axios';

export default function CommunityUpdated() {
  const [projectName, setProjectName] = useState('');
  const [goalAmount, setGoalAmount] = useState('');
  const [description, setDescription] = useState('');
  const [projects, setProjects] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [volunteeredProjects, setVolunteeredProjects] = useState(new Set());


  useEffect(() => {
    fetchProjects();
    loadVolunteeredProjects();
  }, []);

  const fetchProjects = async () => {
    const token = localStorage.getItem('token'); // Retrieve the token
    if (!token) {
      alert('You must be logged in to view projects.');
      return;
    }
  
    try {
      const response = await axios.get('http://localhost:5000/api/community/projects', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      const userId = JSON.parse(atob(token.split('.')[1])).id; // Decode user ID from token
  
      const projectsWithDetails = await Promise.all(
        response.data.map(async (project) => {
          let creatorInfo = null;
          if (project.createdBy) {
            try {
              const userResponse = await axios.get(`http://localhost:5000/api/users/${project.createdBy}`);
              creatorInfo = userResponse.data; // Attach creator info to project
            } catch (error) {
              console.error(`Error fetching user info for project ${project._id}`, error);
            }
          }
  
          return {
            ...project,
            creatorInfo, // Add creator details
            hasParticipated: project.contributedBy.includes(userId), // Check if user has contributed
            isCreator: project.createdBy === userId, // Check if the user is the creator
          };
        })
      );
  
      setProjects(projectsWithDetails);
    } catch (error) {
      console.error('Error fetching projects:', error);
      alert('Failed to fetch projects. Please try again.');
    }
  };
  
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token'); // Retrieve the token from local storage
  
    if (!token) {
      alert('You must be logged in to submit a project.');
      return;
    }
  
    try {
      await axios.post(
        '/api/community/projects',
        { name: projectName, goalAmount, description },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include token for authentication
          },
        }
      );
  
      fetchProjects(); // Refresh the project list
      setProjectName('');
      setGoalAmount('');
      setDescription('');
    } catch (error) {
      console.error('Error submitting project:', error);
      alert('Failed to submit project. Please try again.');
    }
  };
  
  const loadVolunteeredProjects = () => {
    const storedProjects = localStorage.getItem('volunteeredProjects');
    if (storedProjects) {
      setVolunteeredProjects(new Set(JSON.parse(storedProjects)));
    }
  };

 

  const handleContribution = async (projectId) => {
    const token = localStorage.getItem('token'); // Retrieve the token
    if (!token) {
      alert('You must be logged in to participate in a project.');
      return;
    }
  
    try {
      await axios.post(
        `http://localhost:5000/api/community/projects/${projectId}/contribute`,
        { amount: 1 },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include the token in the Authorization header
          },
        }
      );
  
      fetchProjects(); // Refresh the project list to update participation status
    } catch (error) {
      if (error.response?.status === 400) {
        alert(error.response.data.message); // Already contributed message
      } else {
        console.error('Error contributing to project:', error);
        alert('Failed to contribute to the project. Please try again.');
      }
    }
  };
  


  return (
    <>
      <nav className="navbar">
      <Link to="/" className="logo" >
          Civic<span style={{ color: 'blue' }}>Connect</span>
          </Link>
        <ul>
          <li>
            <Link to="/">Home</Link></li>
          <li>
             <Link to="/issue">Report Issues</Link>
          </li>
          <li><Link to="/trending">Trending Issues</Link></li>
                        
        </ul>
      </nav>

      <section className="community-section" id="community">
        <h2>By the people for the people</h2>
        <p>Together, we shape the future we want to see.
          Every voice matters, every effort counts.
           Be the change you wish to witness.
             Volunteer, participate, and make a difference.
             Join hands, because this is by the people, for the people</p>
      </section>

      <section className="crowdfunding-section">
        <h2>Support Local Initiatives</h2>
        <p>Contribute to social campaigns that aim to enhance our community. Together, we can achieve great things!</p>
        <button onClick={() => setShowForm(!showForm)} className="btn">
          {showForm ? 'Cancel' : 'New Project'}
        </button>
        {showForm && (
          <form id="crowdfundingForm" onSubmit={handleSubmit}>
            <label htmlFor="projectName">Project Name:</label>
            <input
              type="text"
              id="projectName"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              required
              placeholder="Enter project name"
            />
            <label htmlFor="goalAmount">Volunteers Required :</label>
            <input
              type="number"
              id="goalAmount"
              value={goalAmount}
              onChange={(e) => setGoalAmount(e.target.value)}
              required
              placeholder="Number of Volunteers Required"
            />
            <label htmlFor="description">Project Description:</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={5}
              placeholder="Describe your project...Mention Location And contact information"
              required
            />
            <button type="submit" className="btn">Submit Project</button>
          </form>
        )}
      </section>
      <section className="monitoring-section">
  <h2>Monitor Your Contributions</h2>
  <p>Keep track of the projects you support. Stay informed about progress and updates.</p>
  <div className="project-list">
    {projects.map((project) => (
      <div className="project-card" key={project._id}>
        <h3>{project.name}</h3>
        <p>Contact Email: {project.creatorInfo?.email || 'Not available'}</p>
        <p>Description: {project.description}</p>
        <p>Volunteers Required: {project.goalAmount} | Active participants: {project.funding}</p>
        <div className="progress-bar">
          <div
            className="progress"
            style={{
              width: `${Math.min((project.funding / project.goalAmount) * 100, 100)}%`,
            }}
          />
        </div>
        <p className="progress-text">
          {Math.min((project.funding / project.goalAmount) * 100, 100).toFixed(2)}% completed
        </p>
        {project.funding >= project.goalAmount ? (
          <p className="goal-completed">Goal is Completed</p>
        ) : project.isCreator ? (
          <p className="creator">You created this project</p> // Optionally show a message to the creator
        ) : project.hasParticipated ? (
          <p className="already-participated">You have participated</p>
        ) : (
          <button onClick={() => handleContribution(project._id)} className="btn">
            Participate
          </button>
        )}
      </div>
    ))}
  </div>
</section>

      <footer>
        <p>© 2025 CivicConnect. All Rights Reserved.</p>
      </footer>
    </>
  );
}

