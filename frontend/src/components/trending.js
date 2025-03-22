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

  const [activeTab, setActiveTab] = useState('citizen'); // 'citizen' or 'government'

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
        const response = await axios.get('http://localhost:5000/api/issues/get', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setTrendingIssues(response.data.issues);
  
        // Fetch user's reported issues
        const issuesResponse = await axios.get('http://localhost:5000/api/issues/user', {
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
        `http://localhost:5000/api/issues/trending/${issueId}/upvote`,
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
        `http://localhost:5000/api/issues/flag/${issueId}`,
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

  // Get issue category from title
  const getIssueCategory = (title) => {
    const titleLower = title.toLowerCase();
    if (titleLower.includes('pothole') || titleLower.includes('road') || titleLower.includes('bridge')) {
      return 'Infrastructure';
    } else if (titleLower.includes('light') || titleLower.includes('safety') || titleLower.includes('crime')) {
      return 'Public Safety';
    } else if (titleLower.includes('garden') || titleLower.includes('park') || titleLower.includes('community')) {
      return 'Community Project';
    }
      else if (titleLower.includes('Water') || titleLower.includes('Dam') || titleLower.includes('Pipline')) {
        return 'Water Department';
    }
    return 'Infrastructure'; // Default
  };

  // Get category icon
  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Infrastructure':
        return '⚠️';
      case 'Public Safety':
        return '⚡';
      case 'Community Project':
        return '🌐';
      default:
        return '📋';
    }
  };

  // Get priority based on votes
  const getIssuePriority = (votes) => {
    if (votes >= 2) return 'HIGH PRIORITY';
    if (votes >= 1) return 'MEDIUM PRIORITY';
    return 'COMMUNITY PROJECT';
  };

  // Get image URL
  const getImageUrl = (issue) => {
    if (issue.images?.length > 0) {
      const img = issue.images[0];
      const base64Image = bufferToBase64(img.data.data);
      return `data:${img.contentType};base64,${base64Image}`;
    }
    
    // Sample images based on category
    switch (getIssueCategory(issue.title)) {
      case 'Infrastructure':
        return 'https://images.unsplash.com/photo-1601024445121-e5b82f020549?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80';
      case 'Public Safety':
        return 'https://images.unsplash.com/photo-1573455494060-c5595004fb6c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80';
      case 'Community Project':
        return 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80';
      default:
        return 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80';
    }
  };

  // Get location name
  const getLocationName = (issue) => {
    return issue.location || 'Multiple Locations';
  };
  
  // Calculate days ago
  const calculateDaysAgo = (createdAt) => {
    const creationDate = new Date(createdAt);
    const currentDate = new Date();
    const timeDifference = currentDate - creationDate;
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    
    if (daysDifference === 0) {
      return 'Today';
    } else if (daysDifference === 1) {
      return 'Yesterday';
    } else {
      return `${daysDifference} days ago`;
    }
  };

  // Get progress percentage
  const getProgressPercentage = (issue) => {
    // For community projects, calculate progress as a percentage of target votes
    if (getIssueCategory(issue.title) === 'Community Project') {
      const targetVotes = 300;
      return Math.min(Math.round((issue.votes / targetVotes) * 100), 100);
    }
    
    // For infrastructure and safety issues
    const ageInDays = Math.floor((new Date() - new Date(issue.createdAt)) / (1000 * 60 * 60 * 24));
    
    // Weight by status
    let statusWeight = 0;
    if (issue.status === 'in-progress') {
      statusWeight = 40;
    } else if (issue.status === 'acknowledged') {
      statusWeight = 20;
    }
    
    // Calculate weighted progress
    const ageProgress = Math.min(ageInDays / 30, 1) * 30;
    const voteProgress = Math.min(issue.votes / 200, 1) * 30;
    
    return Math.min(Math.round(ageProgress + voteProgress + statusWeight), 100);
  };

  // Stats for benefits section
  const citizenBenefits = [
    {
      icon: '🏙️',
      title: 'Better Communities',
      description: 'Directly influence local improvement projects and see community growth over time.'
    },
    {
      icon: '🔊',
      title: 'Amplified Voice',
      description: 'Your concerns are more likely to be addressed when they receive community support.'
    },
    {
      icon: '📊',
      title: 'Transparent Progress',
      description: 'Track the status of reported issues and see how your participation drives change.'
    },
    {
      icon: '🤝',
      title: 'Community Building',
      description: 'Connect with neighbors who share your concerns and collaborate on solutions.'
    }
  ];

  const governmentBenefits = [
    {
      icon: '📈',
      title: 'Data-Driven Decisions',
      description: 'Prioritize resources based on community needs and engagement metrics.'
    },
    {
      icon: '💰',
      title: 'Cost Efficiency',
      description: 'Identify and address issues before they become more expensive problems.'
    },
    {
      icon: '🔄',
      title: 'Streamlined Operations',
      description: 'Consolidate feedback in one platform instead of across multiple channels.'
    },
    {
      icon: '❤️',
      title: 'Improved Public Trust',
      description: 'Demonstrate responsiveness and commitment to community concerns.'
    }
  ];

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
    <div className="trending-split-container">
      {/* Left side: Trending issues */}
      <div className="trending-issues-section">
        <div className="trending-header">
          <h1>Current <span className="text-orange">Trending</span> Issues</h1>
          <p>Stay informed about the most pressing concerns in your community</p>
        </div>

        <div className="issues-grid">
          {trendingIssues
            .filter((issue) => issue.status !== 'resolved') // Exclude resolved issues
            .sort((a, b) => {
              // Calculate the difference between upvotes and flags for each issue
              const aScore = a.votes - (a.flags || 0);
              const bScore = b.votes - (b.flags || 0);
              // Sort by the difference in descending order
              return bScore - aScore;
            })
            .map((issue , index) => {
              const category = getIssueCategory(issue.title);
              const categoryIcon = getCategoryIcon(category);
              const priority = getIssuePriority(issue.votes);
              const timeAgo = calculateDaysAgo(issue.createdAt);
              const location = getLocationName(issue);
              
              return (
                <div className="trending-issue-card" key={issue._id}>
                  <div 
                    className="issue-card-image" 
                    style={{ backgroundImage: `url(${getImageUrl(issue)})` } }
                  >
                    <div className="issue-card-overlay">
                      <div className="issue-priority-badge" >
                      {index === 0 && (
              <div className="issue-priority-badge" data-priority={priority.toLowerCase().replace(/\s+/g, '-')}>
               High Priority Issue
              </div>
            )}
                      </div>
                      
                      <div className="issue-meta">
                        <div className="issue-timeframe">
                          Reported {timeAgo}
                        </div>
                       
                      </div>
                    </div>
                  </div>
                  
                  <div className="issue-card-content">
                    <div className="issue-category" data-category={category.toLowerCase().replace(/\s+/g, '-')}>
                      <span className="category-icon"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="10" r="3" />
                        <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 7 8 11.7z" />
                      </svg></span>
                      <span>{location}</span>
                    </div>
                    {issue.votes > 0 && (
  <span style={{ color: 'green', marginLeft: '1.2rem', fontSize: '0.9rem' }}>
    Upvoted by {issue.votes} citizens
  </span>
)}

                    <div className="issue-location">
                      
                    </div>
                    
                    <h3 className="issue-title">{issue.title}</h3>
                    <p className="issue-description">{issue.description}</p>
                    
                    <div className="issue-footer" style= {{marginBottom: '5px'}} >
                      <div className="supporters">



                      <div className="avatars">
  {Array.from({ length: Math.min(2, issue.votes) }).map((_, index) => {
    const randomSeed = Math.floor(Math.random() * 1000); // Generates a random seed
    const gender = Math.random() > 0.5 ? "male" : "female"; // Randomly choose gender
    const avatarUrl = `https://api.dicebear.com/7.x/avataaars/svg?seed=${randomSeed}&options[style]=${gender}`;

    return (
      <img 
        className="avatar" 
        key={index}
        src={avatarUrl} 
        alt={`${gender} Avatar`}
        style={{ 
          width: '32px', 
          height: '32px', 
          borderRadius: '50%',
          objectFit: 'cover' 
        }}
      />
    );
  })}
</div>



{issue.votes > 2 && (
  <span>+{Math.max(0, issue.votes - 2)} more</span>
)}
                       
                      </div>
                      {issue.upvotedBy?.includes(userId) ? (
                        <div className="upvoted-indicator">
                          <span className="checkmark">✓</span>
                          <span>Upvoted</span>
                        </div>
                      ) : (
                        <button className="cta-button" onClick={() => handleUpvote(issue._id)}>
                          Upvote
                        </button>
                      )}
                       {issue.flaggedBy?.includes(userId) ? (
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginTop: '10px' }}>
                  <span style={{ color: 'red', fontSize: '1.5em' }}>⚑</span>
                  <span style={{ color: 'red' }}>Flagged</span>
                </div>
              ) : (
                <button 
                  className="cta-button" 
                  onClick={() => handleFlag(issue._id)}
                  style={{ 
                    backgroundColor: 'rgb(255 233 233)', 
                    color: '#e34f4f', 
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
                    
                    {issue.flags >= 2 && (
              <p style={{ 
                backgroundColor: 'white', 
                color: 'red', 
                padding: '5px 10px', 
                borderRadius: '4px', 
                marginTop: '8px',
                fontSize : '0.9 em',
              }}>
              Complaint seems to be suspicious. Flagged by {issue.flags} {issue.flags === 1 ? 'person' : 'people'}.
              </p>
            )}
            
            {issue.flags <2 && (
              <p style={{ color: '#ff4d4d', marginTop: '15px', fontSize: '0.9em' }}>
                Flagged by {issue.flags} {issue.flags === 1 ? 'user' : 'users'}
              </p>
            )}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      

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
  
      {/* Right side: Benefits information */}
      <div className="benefits-section">
        <div className="benefits-header">
          <h2>Benefits of <span className="text-blue">Trending</span> Issues</h2>
          <p>Understanding how community engagement creates positive change</p>
          
          <div className="benefits-tabs">
            <button 
              className={`tab-button ${activeTab === 'citizen' ? 'active' : ''}`}
              onClick={() => setActiveTab('citizen')}
            >
              For Citizens
            </button>
            <button 
              className={`tab-button ${activeTab === 'government' ? 'active' : ''}`}
              onClick={() => setActiveTab('government')}
            >
              For Government
            </button>
          </div>
        </div>
        
        <div className="benefits-content">
          {activeTab === 'citizen' ? (
            <div className="benefits-grid">
              {citizenBenefits.map((benefit, index) => (
                <div className="benefit-card" key={index}>
                  <div className="benefit-icon">{benefit.icon}</div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </div>
              ))}
              
              
            </div>
          ) : (
            <div className="benefits-grid">
              {governmentBenefits.map((benefit, index) => (
                <div className="benefit-card" key={index}>
                  <div className="benefit-icon">{benefit.icon}</div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </div>
              ))}
              
              
            </div>
          )}
          
          <div className="cta-section">
            <h3>Make Your Voice Heard</h3>
            <p>Help your community thrive by reporting issues and supporting existing ones.</p>
            <Link to="/issue" className="report-button">Report New Issue</Link>
          </div>
        </div>
      </div>
    </div>

    <Map />

  <footer id="contact">
    <p>© 2025 CivicConnect. All Rights Reserved.</p>
  </footer>
</>

  );
}