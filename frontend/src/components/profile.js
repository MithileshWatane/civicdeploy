import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './styles/profile.css';
import { Link } from 'react-router-dom';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [issues, setIssues] = useState([]);
  const [projects, setProjects] = useState([]); // Added state for projects
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editIssue, setEditIssue] = useState(null); // New state for editing issue
  const [editProject, setEditProject] = useState(null); // New state for editing project
  const [editUser, setEditUser] = useState(null); // New state for editing user details
  const customIcon = new L.Icon({
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  });



    const [modalImage, setModalImage] = useState(null);
  
    const openModal = (image) => {
      setModalImage(image);
    };
  
    const closeModal = () => {
      setModalImage(null);
    }
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        if (token) {
          // Fetch user details
          const response = await axios.get('http://localhost:5000/api/users/me', {
            headers: { Authorization: `Bearer ${token}` },
          });
          setUser(response.data.user);

          // Fetch user's reported issues
          const issuesResponse = await axios.get('http://localhost:5000/api/issues/user', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setIssues(issuesResponse.data.issues);

          // Fetch all projects and filter by user ID (createdBy field)
          const projectsResponse = await axios.get('http://localhost:5000/api/community/projects', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          
          const userId = response.data.user._id; // Extract userId from user response

          // Filter projects created by this user
          const createdProjects = projectsResponse.data.filter(
            (project) => project.createdBy === userId
          );
          setProjects(createdProjects);
        } else {
          setError('No token found');
        }
      } catch (err) {
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const deleteIssue = async (id) => {
    const token = localStorage.getItem('token');
    try {
      await axios.delete(`http://localhost:5000/api/issues/delete/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setIssues(issues.filter((issue) => issue._id !== id));
    } catch (err) {
      setError('Error deleting issue');
    }
  };

  const deleteProject = async (id) => {
    const token = localStorage.getItem('token');
    try {
      await axios.delete(`http://localhost:5000/api/community/delete/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setProjects(projects.filter((project) => project._id !== id));
    } catch (err) {
      setError('Error deleting project');
    }
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditIssue({ ...editIssue, [name]: value });
  };

  const saveEdit = async () => {
    const token = localStorage.getItem('token');
    try {
      const response = await axios.put(
        `http://localhost:5000/api/issues/edit/${editIssue._id}`,
        editIssue,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setIssues((prevIssues) =>
        prevIssues.map((issue) =>
          issue._id === editIssue._id ? { ...issue, ...editIssue } : issue
        )
      );
      setEditIssue(null); // Close the modal
    } catch (err) {
      setError('Error updating issue');
    }
  };

  const saveProjectEdit = async () => {
    const token = localStorage.getItem('token');
    try {
      const response = await axios.put(
        `http://localhost:5000/api/community/edit/${editProject._id}`,
        editProject,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setProjects((prevProjects) =>
        prevProjects.map((project) =>
          project._id === editProject._id ? { ...project, ...editProject } : project
        )
      );
      setEditProject(null); // Close the modal
    } catch (err) {
      setError('Error updating project');
    }
  };

  const saveUserEdit = async () => {
    const token = localStorage.getItem('token');
    try {
      const response = await axios.put(
        `http://localhost:5000/api/register/update`,
        editUser,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setUser({ ...user, name: editUser.name, email: editUser.email });
      setEditUser(null); // Close the modal
    } catch (err) {
      setError('Error updating user');
    }
  };

  const calculateIssueStats = () => {
    const total = issues.length;
    const reported = issues.filter((issue) => issue.status === 'reported').length;
    const inProgress = issues.filter((issue) => issue.status === 'in progress').length;
    const resolved = issues.filter((issue) => issue.status === 'resolved').length;

    return { total, reported, inProgress, resolved };
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  const { total, reported, inProgress, resolved } = calculateIssueStats();

  // Data for Pie Chart
  const pieChartData = [
    { name: 'Reported', value: reported },
    { name: 'In Progress', value: inProgress },
    { name: 'Resolved', value: resolved },
  ];

  const COLORS = ['#ffbb33', '#33b5e5', '#00C49F']; // Colors for chart segments


    // Function to convert buffer to base64 string
  const bufferToBase64 = (buffer) => {
    const binary = new Uint8Array(buffer).reduce((acc, byte) => acc + String.fromCharCode(byte), '');
    return btoa(binary);
  };

  return (
    <>
    <div className="profile-page">
      <nav className="navbar">
         <Link to="/" className="logo" >
                  Civic<span style={{ color: 'blue' }}>Connect</span>
                  </Link>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/issue">Report Issues</Link></li>
          <li><Link to="/trending">Trending Issues</Link></li>
        </ul>
      </nav>

      <div className="main-content">
        <div className="sidebar">
          <div className="user-info">
            {user && (
              <>
                <h1>Profile</h1>
                <h3>Name:</h3>
                <h4>{user.name}</h4>
                <h3>Email:</h3>
                <h4>{user.email} <button onClick={() => setEditUser(user)}>Edit Profile</button></h4>
                <div className="issue-stats">
                  <h4>Issue Statistics:</h4>
                  <p>Total Issues: {total}</p>
                  <p>Reported: {reported}</p>
                  <p>In Progress: {inProgress}</p>
                  <p>Resolved: {resolved}</p>

                  <div className="pie-chart-profile">
                    <h4>Visualization:</h4>
                    {total > 0 ? (
                      <PieChart width={220} height={400}>
                        <Pie
                          data={pieChartData}
                          cx="50%"
                          cy="50%"
                          label
                          outerRadius={100}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {pieChartData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                      </PieChart>
                    ) : (
                      <p>No issues to display on the chart.</p>
                    )}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        <div className="issues">
          <h3>Reported Issues</h3>
          {issues.length === 0 ? (
            <p>No issues reported by User.</p>
          ) : (
            <>
    <ul style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {issues.map((issue) => (
              <li key={issue._id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid #ddd', padding: '10px', borderRadius: '5px' }}>
                <div>
                  <strong>{issue.title}</strong> <br />
                  Description: {issue.description} <br />
                  Location: {issue.location} <br />
                  Status: {issue.status} <br />
                  Reported To: {issue.governmentAuthority.name} ({issue.governmentAuthority.email}) <br />
                  <button onClick={() => setEditIssue(issue)}>Edit</button>
                  <button onClick={() => deleteIssue(issue._id)}>Delete</button>
                </div>
                {/* {issue.image?.[0] && <img src={issue.image[0]} alt="Issue" className="issue-image" style={{ width: '150px', height: '150px', objectFit: 'cover', cursor: 'pointer' }} onClick={() => openModal(issue.image[0])} />} */}
                {issue.image?.length > 0 && issue.image.map((img, index) => {
              const base64Image = bufferToBase64(img.data.data); // Accessing binary data
              const imgSrc = `data:${img.contentType};base64,${base64Image}`;

              return (
                <img
                  key={index}
                  src={imgSrc}
                  alt={`Issue ${index + 1}`}
                  style={{ width: '150px', height: '150px', objectFit: 'cover', marginRight: '10px' }}
                  onClick={() => openModal(imgSrc)} />
              );
            })}
              </li>
            ))}
          </ul>


     
          {modalImage && (
        <div className="modal" style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'rgba(0,0,0,0.8)', padding: '20px', borderRadius: '10px', zIndex: 1001 }}>
          <button onClick={closeModal} style={{ position: 'absolute', top: '10px', right: '10px', backgroundColor: 'white', border: 'none', padding: '5px 10px', cursor: 'pointer', borderRadius: '5px', zIndex: 1002 }}>Close</button>
          <img src={modalImage} alt="Expanded" style={{ maxWidth: '80vw', maxHeight: '80vh', borderRadius: '5px' }} />

         

        </div>
      )}
       
            </>
          )}
        </div>
      </div>
      {editProject && (
          <div className="edit-modal">
            <div className="edit-content">
              <h3>Edit Project</h3>
              <form>
                <label>
                  Name:
                  <input
                    type="text"
                    name="name"
                    value={editProject.name}
                    onChange={(e) =>
                      setEditProject({ ...editProject, name: e.target.value })
                    }
                  />
                </label>
                <label>
                  Description:
                  <textarea
                    name="description"
                    value={editProject.description}
                    onChange={(e) =>
                      setEditProject({ ...editProject, description: e.target.value })
                    }
                  />
                </label>
                <button type="button" onClick={saveProjectEdit}>
                  Save
                </button>
                <button type="button" onClick={() => setEditProject(null)}>
                  Cancel
                </button>
              </form>
            </div>
          </div>
        )}

        {editUser && (
          <div className="edit-modal">
            <div className="edit-content">
              <h3>Edit Profile</h3>
              <form>
                <label>
                  Name:
                  <input
                    type="text"
                    name="name"
                    value={editUser.name}
                    onChange={(e) =>
                      setEditUser({ ...editUser, name: e.target.value })
                    }
                  />
                </label>
                <label>
                  Email:
                  <input
                    type="email"
                    name="email"
                    value={editUser.email}
                    onChange={(e) =>
                      setEditUser({ ...editUser, email: e.target.value })
                    }
                  />
                </label>
                <button type="button" onClick={saveUserEdit}>
                  Save
                </button>
                <button type="button" onClick={() => setEditUser(null)}>
                  Cancel
                </button>
              </form>
            </div>
          </div>
        )}

{editIssue && (
          <div className="edit-modal">
            <div className="edit-content">
              <h3>Edit Issue</h3>
              <form>
                <label>
                  Title:
                  <input
                    type="text"
                    name="title"
                    value={editIssue.title}
                    onChange={handleEditChange}
                  />
                </label>
                <label>
                  Description:
                  <textarea
                    name="description"
                    value={editIssue.description}
                    onChange={handleEditChange}
                  />
                </label>
                <button type="button" onClick={saveEdit}>
                  Save
                </button>
                <button type="button" onClick={() => setEditIssue(null)}>
                  Cancel
                </button>
              </form>
            </div>
          </div>
        )}
    </div>
      <footer id="contact" >
      <p>© 2025 CivicConnect. All Rights Reserved.</p>
    </footer>
    </>
  );
};

export default Profile;
