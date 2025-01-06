import React, { useEffect, useState } from 'react';
import './styles/trending.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';  // Corrected import

export default function Trending() {
  const [trendingIssues, setTrendingIssues] = useState([]);
  const [userId, setUserId] = useState(null); // Store the decoded user ID
  const [upvotedIssues, setUpvotedIssues] = useState(new Set());

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

  return (
    <>
      <nav className="navbar">
         <Link to="/" className="logo" >
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
        <div className="issue-card-container">
          {trendingIssues
            .filter((issue) => issue.status !== 'resolved') // Exclude resolved issues
            .sort((a, b) => b.votes - a.votes)
            .map((issue, index) => (
              <div className="issue-card" key={issue._id}>
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
                <p>Reported by {issue.votes} citizens</p>
                <p>{issue.description}</p>
                {issue.upvotedBy.includes(userId) ? (
                  // Show this if the user has already upvoted
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <span style={{ color: 'green', fontSize: '1.5em' }}>✓</span>
                    <span style={{ fontWeight: 'bold', color: 'green' }}>Upvoted</span>
                  </div>
                ) : (
                  // Show this if the user has not upvoted
                  <button
                    className="cta-button"
                    onClick={() => handleUpvote(issue._id)}
                  >
                    Upvote
                  </button>
                )}
              </div>
            ))}
        </div>
      </section>

      <footer id="contact">
        <p>© 2025 CivicConnect. All Rights Reserved.</p>
      </footer>
    </>
  );
}
