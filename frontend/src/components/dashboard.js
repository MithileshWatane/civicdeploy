import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';
import './styles/dashboard.css';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  const [complaints, setComplaints] = useState([]);
  const [filteredComplaints, setFilteredComplaints] = useState([]);
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedTitle, setSelectedTitle] = useState(null);
  const [uniqueTitles, setUniqueTitles] = useState(null);
  const [issueCounts, setIssueCounts] = useState({
    total: 0,
    reported: 0,
    inProgress: 0,
    resolved: 0,
  });

  

    // Function to convert buffer to base64 string
    const bufferToBase64 = (buffer) => {
      const binary = new Uint8Array(buffer).reduce((acc, byte) => acc + String.fromCharCode(byte), '');
      return btoa(binary);
    };
 const [modalImage, setModalImage] = useState(null);
  
    const openModal = (image) => {
      setModalImage(image);
    };
  
    const closeModal = () => {
      setModalImage(null);
    }
  const allStatuses = ['all', 'in progress', 'resolved', 'reported'];
  const COLORS = ['#8884d8', '#82ca9d', '#ffc658'];

  const fetchComplaints = async () => {
    const token = localStorage.getItem('token'); // Assuming the token is stored in localStorage
    try {
      const response = await fetch('http://localhost:5000/api/governmentid/reported-issues', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`, // Include the token in the headers
        },
      });
      const data = await response.json();
      
      // Ensure the issues array exists in the response data
      if (Array.isArray(data.issues)) {
        setComplaints(data.issues);
        setFilteredComplaints(data.issues);
  
        // Calculate issue counts
        const reported = data.issues.filter((complaint) => complaint.status === 'reported').length;
        const inProgress = data.issues.filter((complaint) => complaint.status === 'in progress').length;
        const resolved = data.issues.filter((complaint) => complaint.status === 'resolved').length;
  
        setIssueCounts({
          total: data.issues.length,
          reported,
          inProgress,
          resolved,
        });
  
        // Remove duplicate titles
        const uniqueTitles = [...new Set(data.issues.map((complaint) => complaint.title))];
        setUniqueTitles(uniqueTitles);
      } else {
        console.error('Issues is not an array:', data.issues);
      }
    } catch (error) {
      console.error('Error fetching complaints:', error);
    }
  };
  
  // Other functions (unchanged for filtering and status update)

  const chartData = [
    { name: 'Reported', count: issueCounts.reported },
    { name: 'In Progress', count: issueCounts.inProgress },
    { name: 'Resolved', count: issueCounts.resolved },
  ];

  useEffect(() => {
    fetchComplaints(); // Fetch complaints on component mount
  }, []);

  useEffect(() => {
    filterComplaintsByStatus(statusFilter); // Apply status filter whenever it changes
  }, [statusFilter, complaints]);

  const filterComplaintsByStatus = (status) => {
    const filtered = complaints.filter(
      (complaint) => status === 'all' || complaint.status === status
    );
    setFilteredComplaints(filtered);
    setSelectedTitle(null); // Reset title filter when status changes
  };
  
  const filterComplaintsByTitle = (title) => {
    if (selectedTitle === title) {
      // Deselect if the same title is clicked
      setSelectedTitle(null);
      filterComplaintsByStatus(statusFilter); // Reset to status filter
    } else {
      const filtered = complaints.filter((complaint) => complaint.title === title);
      setFilteredComplaints(filtered);
      setSelectedTitle(title); // Highlight the newly selected title
    }
  };
  
  const changeStatus = async (id, newStatus) => {
    const token = localStorage.getItem('token'); // Assuming the token is stored in localStorage
    try {
      const response = await fetch(`http://localhost:5000/api/issues/modify/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`, // Include the token in the headers
        },
        body: JSON.stringify({ status: newStatus }), // Send the new status
      });
  
      if (!response.ok) {
        throw new Error('Failed to update status');
      }
  
      const updatedComplaint = await response.json();
      // Update the local state to reflect the new status
      setComplaints((prevComplaints) =>
        prevComplaints.map((complaint) =>
          complaint._id === updatedComplaint.updatedIssue._id ? updatedComplaint.updatedIssue : complaint
        )
      );
      fetchComplaints(); // Re-fetch complaints to ensure the latest data
    } catch (error) {
      console.error('Error changing status:', error);
    }
  };
  
  return (
    <>
      <nav className="navbar">
         <Link to="/" className="logo" >
                  Civic<span style={{ color: 'blue' }}>Connect</span>
                  </Link>
        <ul>
          <li><Link to="/">Home</Link></li>
        </ul>
      </nav>
      <section className="dashboard">
        <h1>Authority Dashboard</h1>


        <div className="bc">

        <div className="a">

{/* Visualization Section */}
<div className="visualization-section">
  <h2>Issue Overview</h2>
  <div className="charts">
    {/* Bar Chart */}
    <div className="bar-chart">
      <h3>Issue Counts</h3>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
          <defs>
            <linearGradient id="colorBar" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0.8} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip
            contentStyle={{ backgroundColor: '#f4f4f4', border: 'none', borderRadius: '8px' }}
            itemStyle={{ fontSize: '12px' }}
            formatter={(value) => [`${value} Issues`, 'Count']}
          />
          <Bar dataKey="count" fill="url(#colorBar)" radius={[10, 10, 0, 0]}>
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
    {/* Doughnut Chart */}
    <div className="pie-chart">
      <h3>Issue Distribution</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={chartData}
            dataKey="count"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={90}
            paddingAngle={5}
            fill="#82ca9d"
            label={({ name, count }) => `${name}: ${count}`}
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{ backgroundColor: '#f4f4f4', border: 'none', borderRadius: '8px' }}
            formatter={(value, name) => [`${value} Issues`, name]}
          />
          <Legend iconSize={10} layout="horizontal" verticalAlign="bottom" align="center" />
        </PieChart>
      </ResponsiveContainer>
    </div>
  </div>
</div>
</div>


<div className="b">

        {/* Existing Content */}
        <div className="filters">
          <label htmlFor="statusFilter">Filter by Status:</label>
          <select
            id="statusFilter"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            {allStatuses.map((status) => (
              <option key={status} value={status}>
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </option>
            ))}
          </select>
        </div>
        <div className="titles-section">
          <h2>Titles</h2>
          <div className="titles-buttons">
            {filteredComplaints.length > 0 ? (
              [...new Set(filteredComplaints.map((complaint) => complaint.title))].map((title) => (
                <button
                  key={title}
                  className={`category-btn ${selectedTitle === title ? 'selected' : ''}`}
                  onClick={() => filterComplaintsByTitle(title)}
                >
                  {title}
                </button>
              ))
            ) : (
              <p>No complaints found for the selected status.</p>
            )}
          </div>
        </div>

        
        <div id="complaintsContainer" className="complaints-container">
  <h2>Complaint Details</h2>
  {filteredComplaints.length > 0 ? (
    [...filteredComplaints]
      .sort((a, b) => (a.flags || 0) - (b.flags || 0)) // Sort by flag count in reverse order
      .map((complaint) => (
        <div
          key={complaint._id}
          className="complaint-card"
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between', 
            gap: '20px',
            backgroundColor: complaint.flags < 2 ? 'white' : '#fff8f8', // Light red background for heavily flagged complaints
            borderLeft: complaint.flags >  2 ? '4px solid #ff4d4d' : 'none'
          }}
        >
          <div style={{ flex: 1 }}>
            <h3>{complaint.title}</h3>
            <p>{complaint.description}</p>
            <p><strong>Location:</strong> {complaint.location}</p>
            <p className="complaint-status">
              <strong>Status:</strong> {complaint.status.charAt(0).toUpperCase() + complaint.status.slice(1)}
            </p>
            <label htmlFor={`status-select-${complaint._id}`} className="status-label">
              Change Status:
            </label>
            <select
              id={`status-select-${complaint._id}`}
              value={complaint.status}
              onChange={(e) => changeStatus(complaint._id, e.target.value)}
              className="status-dropdown"
            >
              {allStatuses.filter((status) => status !== 'all').map((status) => (
                <option key={status} value={status}>
                  {status.charAt(0).toUpperCase() + status.slice(1)}
                </option>
              ))}
            </select>
            {complaint.flags > 1 && (
              <p style={{ 
                backgroundColor: 'white', 
                color: 'red', 
                padding: '5px 10px', 
                borderRadius: '4px', 
                marginTop: '8px',
              }}>
                <strong>Warning:</strong>Complaint seems to be suspicious. Flagged by {complaint.flags} {complaint.flags === 1 ? 'person' : 'people'}.
              </p>
            )}
          </div>
          
          {complaint.images?.length > 0 && complaint.images.map((img, index) => {
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
        </div>
      ))
  ) : (
    <p>No complaints found for the selected title.</p>
  )}
</div>

        </div>
        </div>

      </section>

      {modalImage && (
    <div
      className="modal"
      style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'rgba(0,0,0,0.8)',
        padding: '20px',
        borderRadius: '10px',
        zIndex: 1001,
      }}
    >
      <button
        onClick={closeModal}
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          backgroundColor: 'white',
          border: 'none',
          padding: '5px 10px',
          cursor: 'pointer',
          borderRadius: '5px',
          zIndex: 1002,
        }}
      >
        Close
      </button>
      <img
        src={modalImage}
        alt="Expanded"
        style={{ maxWidth: '80vw', maxHeight: '80vh', borderRadius: '5px' }}
      />
    </div>
  )}
      <footer>
        <p>© 2025 CivicConnect. All Rights Reserved.</p>
      </footer>
    </>
  );
}