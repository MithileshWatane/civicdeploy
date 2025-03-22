import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './trending2.css';
import axios from 'axios';
import './styles/index.css';
import { jwtDecode } from 'jwt-decode';  // Corrected import
import Map from './map';


export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState(null); // Track the user role
  const navigate = useNavigate();

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
  
  // Check login status and role on component mount
  useEffect(() => {
    const token = localStorage.getItem('token');
    const userRole = localStorage.getItem('role'); // Retrieve role from local storage
    setIsLoggedIn(!!token);
    setRole(userRole);
  }, []);

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role'); // Clear the role as well
    setIsLoggedIn(false);
    setRole(null);
    navigate('/login');
  };

  const requireAuth = (navigate) => {
    const token = localStorage.getItem('token');
    if (!token) {
      alert('Please login to continue.');
      navigate('/login');
      return false;
    }
    return true;
  };

  const handleNavigation = (path) => {
    if (requireAuth(navigate)) {
      navigate(path);
    }
  };

  const handleReportIssueClick1 = () => {
    if (requireAuth(navigate)) {
      navigate('/issue'); 
    }
  };
  const handleReportIssueClick2 = () => {
    if (requireAuth(navigate)) {
      navigate('/trending'); 
    }
  };
  
 
  
  const handleReportIssueClick3 = () => {
    if (requireAuth(navigate)) {
      navigate('/community'); 
    }
  };
  const handleReportIssueClick4 = () => {
    if (requireAuth(navigate)) {
      navigate('/profile'); 
    }
  };
 
  const handleReportIssueClick6 = () => {
    if (requireAuth(navigate)) {
      navigate('/register'); 
    }
  };

  const [trendingIssues, setTrendingIssues] = useState([]);
  const [userId, setUserId] = useState(null); // Store the decoded user ID

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
        const response = await axios.get('http://localhost:5000/api/issues/get', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`, // Send the token for authentication
          },
        });
        setTrendingIssues(response.data.issues);
      } catch (error) {
        console.error('Error fetching trending issues:', error);
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
  return (

    <>
    {isLoggedIn ? (
          <div className="main">
      <nav className="navbar">
        <div className="logo" onClick={() => handleNavigation('/')}>
          Civic<span style={{ color: 'blue' }}>Connect</span>
        </div>
        <ul>
          {role === 'citizen' && (
            <>
              <li onClick={() => handleNavigation('/issue')}>
                <Link to="/">Report Issues</Link>
              </li>
              <li onClick={() => handleNavigation('/trending')}>
                <Link to="/">Trending Issues</Link>
              </li>
              <li onClick={() => handleNavigation('/community')}>
                <Link to="/">Community</Link>
              </li>
              {isLoggedIn ? (
            <>
              <li onClick={() => navigate('/profile')}>
                <img 
                 src="data:image/png;base64,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" // Replace with user profile image URL
                  alt="Profile"
                  height={35}
                  className="profile-logo"
                />
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </>
          )}
            </>
          )}
          {role === 'government' && (
            <li onClick={() => handleNavigation('/dashboard')}>
              <Link to="/">Track Progress</Link>
            </li>
          )}
          {isLoggedIn ? (
            <>
              <li>
                <button onClick={handleLogout} className="logout-btn">
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
  
      {role === 'citizen' && (
      <header className="hero">
        <div className="overlay" />
        <div className="hero-content" >
          <h1>'Empower Your Voice'</h1>
          <p>Report issues, Track progress  and Contribute to community.</p>
          <Link to="/issue" className="btn hero-btn"  >
            Report Now
          </Link>
        </div>
      </header>
      )}
      {role === 'government' && (
      <header className="hero">
        <div className="overlay" />
        <div className="hero-content" >
          <h1>'Empower Your Voice'</h1>
          <p>Report issues, Track progress  and Contribute to community.</p>
          
        </div>
      </header>
      )}
    <div>


      


      
          <>
          {role === 'citizen' && (
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
                      <span style={{ color: 'green'}} >Upvoted by {issue.votes} citizens</span>
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
                  <span style={{ color: 'red', fontSize: '1.2em' }}>⚑</span>
                  <span style={{ color: 'red' }}>Flagged</span>
                </div>
              ) : (
                <button 
                  className="cta-button" 
                  onClick={() => handleFlag(issue._id)}
                  style={{ 
                    backgroundColor: ' rgb(255, 233, 233)', 
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

           





          )}
       {role === 'government' && (
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
                     <h3>
                       #{index + 1} {issue.title}
                     </h3>
                     <span style={{ color: 'green'}}>Upvoted by {issue.votes} citizens</span>
                     {issue.flags > 0 && (
              <p style={{ color: '#ff4d4d', marginTop: '5px', fontSize: '0.9em' }}>
                Flagged by {issue.flags} {issue.flags === 1 ? 'user' : 'users'}
              </p>
            )}
                     <p>{issue.description}</p>
                    
                       <button className="cta-button" onClick={() => handleNavigation('/dashboard')}>
                         Know More
                       </button>
                    
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
          )}
      </>



         
      
      <div className="features">
      <center> <h1>Features</h1></center>  
      </div>

        {role === 'government' && (
          <div class="features">
          <div className="card">
            <div className="card-image"></div>
            <div className="card-content">
              <h3>Track Progress</h3>
              <p>Monitor the reported issues in real time, ensuring you stay informed about their status and the steps being taken to resolve them</p>
              <Link to="/dashboard" className="btn">
                Check Status
              </Link>
            </div>
          </div>
          </div>
        )}
         {role === 'citizen' && (
         <div class="features">
    
    
      
            
         <div class="card">
           <div class="card-image"></div>
           <div class="card-content" onClick={handleReportIssueClick1}>
           <h3>Report Issues</h3>
             <p>Quickly and effortlessly report civic issues affecting your community to ensure a cleaner, safer, and better place for everyone around you.</p>
             <Link to="/" className="btn" >
               Get Started
             </Link>
           </div>
         </div>
       
      
       <div class="card">
           <div class="card-image"></div>
           <div class="card-content" onClick={handleReportIssueClick2}>
           <h3>Trending Issues</h3>
             <p>Stay updated on the most discussed issues in your area and get the latest insights to understand what's impacting your community and how you can stay informed.</p>
             <Link to="/" className="btn">
               Explore Now
             </Link>
           </div>
         </div>
         <div class="card">
           <div class="card-image"></div>
           <div class="card-content" onClick={handleReportIssueClick3}>
           <h3>Volunteering </h3>
           <p>Contribute your time and skills to initiatives that aim to enhance our community. Together, we can achieve great things through collective effort and dedication!</p>
             <Link to="/" className="btn">
               Let's Do
             </Link>
           </div>
         </div><div class="card">
           <div class="card-image"></div>
           <div class="card-content" onClick={handleReportIssueClick4}>
           <h3>Track Progress</h3>
           <p>Monitor the reported issues in real time, ensuring you stay informed about their status and the steps being taken to resolve them</p>
           <Link to="/" className="btn">
               Check Status
             </Link>
           </div>
         </div><div class="card">
           <div class="card-image"></div>
           <div class="card-content" onClick={handleReportIssueClick3}>
           <h3>Community Engagement</h3>
           <p>Together, we shape the future. Every voice matters, every effort counts. Volunteer, participate, and make a difference. This is by the people, for the people.</p>
           <Link to="/" className="btn">
               Join Us
             </Link>
           </div>
       
          </div>
          </div>
        )}
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


      <footer id="contact">
        <p>© 2025 CivicConnect. All Rights Reserved.</p>
      </footer>
    </div>
       
         ) : (
          <div className="main">
          <nav className="navbar">
            <div className="logo">
              Civic<span style={{ color: 'blue' }}>Connect</span>
            </div>
            <ul>
              <li onClick={handleReportIssueClick1}>
                <Link to="/">Report Issues</Link>
              </li>
              <li onClick={handleReportIssueClick2}>
                <Link to="/">Trending Issues</Link>
              </li>
              <li onClick={handleReportIssueClick3}>
                <Link to="/">Community</Link>
              </li>
              {isLoggedIn ? (
                <>
                  <li onClick = {() => navigate('/profile')}>
                      <img 
                        alt="Profile"
                        height={35}
                        className="profile-logo"
                      />
                    
                  </li>
                  <li >
                    <button onClick={handleLogout} className="logout-btn">
                      Logout
                    </button>
                  </li>
                </>
              ) : ( 
                <>
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                  <li>
                    <Link to="/register">Register</Link>
                  </li>
                </>
              )}
            </ul>
          </nav>
    
          <header className="hero">
            <div className="overlay" />
            <div className="hero-content">
              <h1>'Empower Your Voice'</h1>
              <p>Report issues, Track progress  and Contribute to community.</p>
              <div>
              <Link to="/" className="btn hero-btn" onClick={handleReportIssueClick1} >
                Report Now
              </Link>
              </div>
            </div>
          </header>
    
    
    
    < Map />
          <div className="features">
           <center> <h1>Features</h1></center>  
          </div>
            
        <div class="features">
    
    
      
            
            <div class="card">
              <div class="card-image"></div>
              <div class="card-content" onClick={handleReportIssueClick1}>
              <h3>Report Issues</h3>
              <p>Quickly and effortlessly report civic issues affecting your community to ensure a cleaner, safer, and better place for everyone around you.</p>
              <Link to="/" className="btn" >
                  Get Started
                </Link>
              </div>
            </div>
          
         
          <div class="card">
              <div class="card-image"></div>
              <div class="card-content" onClick={handleReportIssueClick2}>
              <h3>Trending Issues</h3>
              <p>Stay updated on the most discussed issues in your area and get the latest insights to understand what's impacting your community and how you can stay informed.</p>
              <Link to="/" className="btn">
                  Explore Now
                </Link>
              </div>
            </div>
            <div class="card">
              <div class="card-image"></div>
              <div class="card-content" onClick={handleReportIssueClick3}>
              <h3>Volunteering </h3>
                <p>Contribute your time and skills to initiatives that aim to enhance our community. Together, we can achieve great things through collective effort and dedication!</p>
                <Link to="/" className="btn">
                Let's Do
                </Link>
              </div>
            </div><div class="card">
              <div class="card-image"></div>
              <div class="card-content" onClick={handleReportIssueClick4}>
              <h3>Track Progress</h3>
                <p>Monitor the reported issues in real time, ensuring you stay informed about their status and the steps being taken to resolve them</p>
                <Link to="/" className="btn">
                  Check Status
                </Link>
              </div>
            </div><div class="card">
              <div class="card-image"></div>
              <div class="card-content" onClick={handleReportIssueClick3}>
              <h3>Community Engagement</h3>
                <p>Together, we shape the future. Every voice matters, every effort counts. Volunteer, participate, and make a difference. This is by the people, for the people.</p>
                <Link to="/" className="btn">
                  Join Us
                </Link>
              </div>
            </div><div class="card">
              <div class="card-image"></div>
              <div class="card-content" onClick={handleReportIssueClick6}>
              <h3>Government</h3>
                <p>Support from government <br /> Authorities.</p>
              
              <Link to="/" className="btn">
                  Register
                </Link>
            </div>
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
    
       <footer id="contact">
              <p>© 2025 CivicConnect. All Rights Reserved.</p>
            </footer>
    
    
    
            </div>
        
         )}
    </>
    )}
