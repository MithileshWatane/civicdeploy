import React, { useEffect, useState } from 'react';
import './styles/trending.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';  // Corrected import
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import Map from './map';
export default function Trending() {
  const [trendingIssues, setTrendingIssues] = useState([]);
  const [userId, setUserId] = useState(null); // Store the decoded user ID
  const [issues, setIssues] = useState([]);

  

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

   const customIcon = new L.Icon({
      iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
    });
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // Decode token or retrieve userId based on your auth flow
      const decodedToken = jwtDecode(token);
      setUserId(decodedToken.id); // Assuming userId is in the decoded token
    }
  }, []);

  useEffect(() => {
    const fetchTrendingIssues = async () => {
      try {
        const token = localStorage.getItem('token'); // Get the token once
  
        // Fetch trending issues
        const response = await axios.get('https://civicdeploy-1.onrender.com/api/issues/get', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setTrendingIssues(response.data.issues);
  
        // Fetch user's reported issues
        const issuesResponse = await axios.get('https://civicdeploy-1.onrender.com/api/issues/user', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setIssues(issuesResponse.data.issues);
        
      } catch (error) {
        console.error('Error fetching issues:', error);
      }
    };
  
    fetchTrendingIssues();
  }, []);
  

  const handleUpvote = async (issueId) => {
    try {
      const response = await axios.put(
        `https://civicdeploy-1.onrender.com/api/issues/trending/${issueId}/upvote`,
        { upvote: true },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );

      // Update the state to reflect the new votes and upvotedBy data
      setTrendingIssues((prevIssues) =>
        prevIssues.map((issue) =>
          issue._id === issueId
            ? {
                ...issue,
                votes: response.data.votes,
                upvotedBy: [...issue.upvotedBy, userId],  // Add userId to upvotedBy array
              }
            : issue
        )
      );
      
    } catch (error) {
      console.error('Error upvoting issue:', error);
    }
  };

  // New function to handle flagging issues
  const handleFlag = async (issueId) => {
    try {
      const response = await axios.put(
        `https://civicdeploy-1.onrender.com/api/issues/flag/${issueId}`,
        { flag: true },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );

      // Update the state to reflect the new flags and flaggedBy data
      setTrendingIssues((prevIssues) =>
        prevIssues.map((issue) =>
          issue._id === issueId
            ? {
                ...issue,
                flags: response.data.flags,
                flaggedBy: [...(issue.flaggedBy || []), userId],  // Add userId to flaggedBy array
              }
            : issue
        )
      );
      
    } catch (error) {
      console.error('Error flagging issue:', error);
    }
  };

  return (
<>
  <nav className="navbar">
    <Link to="/" className="logo">
      Civic<span style={{ color: 'blue' }}>Connect</span>
    </Link>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/issue">Report Issues</Link>
      </li>
      <li>
        <Link to="/community">Community</Link>
      </li>
    </ul>
  </nav>

  <section className="trending-section" id="trending">
  <h2>Trending Issues</h2>
  <div className="issue-card-container" style={{ display: 'flex', gap: '20px' }}>
    {trendingIssues
     .filter((issue) => issue.status !== 'resolved') // Exclude resolved issues
     .sort((a, b) => {
       // Calculate the difference between upvotes and flags for each issue
       const aScore = a.votes - (a.flags || 0);
       const bScore = b.votes - (b.flags || 0);
       // Sort by the difference in descending order
       return bScore - aScore;
     })
      .map((issue, index) => (
        <div
          className="issue-card"
          key={issue._id}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '20px' }}
        >
          <div style={{ flex: 1 }}>
            {index === 0 && (
              <img
                src="https://cdn-icons-png.flaticon.com/512/12225/12225836.png"
                alt="Trending"
                className="trending-icon"
              />
            )}
            <h3 style={{ color: 'black' }}>
              #{index + 1} {issue.title}
            </h3>
            <p>Upvoted by {issue.votes} citizens</p>
            <p>{issue.description}</p>
            <div style={{ display: 'flex', gap: '10px' }}>
              {issue.upvotedBy?.includes(userId) ? (
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <span style={{ color: 'green', fontSize: '1.5em' }}>✓</span>
                  <span style={{ fontWeight: 'bold', color: 'green' }}>Upvoted</span>
                </div>
              ) : (
                <button className="cta-button" onClick={() => handleUpvote(issue._id)}>
                  Upvote
                </button>
              )}
              
              {/* Flag button and status */}
              {issue.flaggedBy?.includes(userId) ? (
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <span style={{ color: 'red', fontSize: '1.5em' }}>⚑</span>
                  <span style={{ color: 'red' }}>Flagged</span>
                </div>
              ) : (
                <button 
                  className="cta-button" 
                  onClick={() => handleFlag(issue._id)}
                  style={{ 
                    backgroundColor: ' rgb(247, 106, 106)', 
                    color: 'white', 
                    padding: '8px 16px', 
                    border: 'none', 
                    borderRadius: '4px', 
                    cursor: 'pointer' 
                  }}
                >
                  Flag Issue
                </button>
              )}
            </div>
            {issue.flags > 0 && (
              <p style={{ color: '#ff4d4d', marginTop: '5px', fontSize: '0.9em' }}>
                Flagged by {issue.flags} {issue.flags === 1 ? 'user' : 'users'}
              </p>
            )}
          </div>
          {issue.images?.length > 0 && issue.images.map((img, index) => {
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
      ))}
  </div>
  <Map />
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

  <footer id="contact">
    <p>© 2025 CivicConnect. All Rights Reserved.</p>
  </footer>
</>

  );
}