import React, { useEffect, useState } from 'react';
import './styles/trending.css';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';  // Corrected import
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import './mapstyles.css'

const getCustomIcon = (status) => {
  const iconUrls = {
    pending: "https://cdn-icons-png.flaticon.com/512/684/684908.png", // Yellow marker
    resolved: "https://cdn-icons-png.flaticon.com/512/190/190411.png", // Green marker
    urgent: "https://cdn-icons-png.flaticon.com/512/483/483947.png", // Red marker
    default: "https://cdn-icons-png.flaticon.com/512/252/252025.png", // Blue marker
  };

  return new L.Icon({
    iconUrl: iconUrls[status] || iconUrls.default, // Default to blue if status is unknown
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40],
  });
};
export default function Map() {
    const [userId, setUserId] = useState(null); // Store the decoded user ID
    const [issues, setIssues] = useState([]);
    const [activeMarker, setActiveMarker] = useState(null); // Store active marker
  
  
    const customIcon = new L.Icon({
      iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png", // Custom marker icon
      iconSize: [40, 40], // Size of the icon
      iconAnchor: [20, 40], // Positioning anchor
      popupAnchor: [0, -40], // Popup positioning
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
      // Open all popups when markers are added
      setTimeout(() => {
        const popups = document.querySelectorAll(".leaflet-popup");
        popups.forEach((popup) => popup.classList.add("leaflet-popup-open"));
      }, 500); // Delay to ensure markers load before opening popups
    }, [issues]);
  
    useEffect(() => {
      const fetchTrendingIssues = async () => {
        try {
          const token = localStorage.getItem('token'); // Get the token once

    
          // Fetch user's reported issues
          const issuesResponse = await axios.get('http://localhost:5000/api/issues/get', {
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
  
        
        
      } catch (error) {
        console.error('Error upvoting issue:', error);
      }
    };


return (

<>
<>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Map Integration</title>
  <link
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
    rel="stylesheet"
  />
  <link rel="stylesheet" href="styles.css" />
  <div className="mapcontainer">
    <div className="mapcard">
      <div className="grid-container">
        <div>
          <h3 className="title">
            Interactive <span className="highlight">Map Integration</span>
          </h3>
          <p className="description">
            Our platform integrates with mapping services to provide a visual
            representation of reported issues in your community, allowing for
            better coordination and awareness.
          </p>
          <div className="features">
            <div className="feature">
              <div className="icon-box blue">
                <svg
                  className="icon"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                  />
                  <path
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                  />
                </svg>
              </div>
              <div>
                <h4 className="feature-title">Visual Issue Mapping</h4>
                <p className="feature-description">
                  See all reported issues on an interactive map with color-coded
                  status indicators.
                </p>
              </div>
            </div>
            <div className="feature">
              <div className="icon-box green">
                <svg
                  className="icon"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                  />
                  <path
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                  />
                </svg>
              </div>
              <div>
                <h4 className="feature-title">Location-Based Filtering</h4>
                <p className="feature-description">
                  Filter issues by location, category, or status to find what
                  matters most to you.
                </p>
              </div>
            </div>
            <div className="feature">
              <div className="icon-box orange">
                <svg
                  className="icon"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                  />
                </svg>
              </div>
              <div>
                <h4 className="feature-title">Historical Data Access</h4>
                <p className="feature-description">
                  View past issues and resolution times to track community
                  improvements over time.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <MapContainer center={[28.7041, 77.1025]} zoom={5} style={{ height: "500px", width: "100%", borderRadius: "10px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {issues.map(
        (issue) =>
          issue.latitude &&
          issue.longitude && (
            <Marker
              key={issue._id}
              position={[issue.latitude, issue.longitude]}
              icon={getCustomIcon(issue.status.toLowerCase())}
              eventHandlers={{
                mouseover: (e) => e.target.openPopup(), // Open on hover
                mouseout: (e) => {
                  if (activeMarker !== issue._id) e.target.closePopup(); // Close if not clicked
                },
                click: (e) => {
                  setActiveMarker(issue._id); // Set the active marker
                  e.target.openPopup(); // Keep popup open on click
                },
              }}
            >
              <Popup>
                <strong style={{ fontSize: "16px", color: "#333" }}>{issue.title}</strong>
                <br />
                <span style={{ fontSize: "14px", color: "#666" }}>{issue.description}</span>
                <br />
                <span style={{ fontSize: "12px", fontWeight: "bold", color: "#007bff" }}>
                  📍 {issue.location}
                </span>
                <br />
                <span style={{ fontSize: "12px", fontWeight: "bold", color: issue.status === "urgent" ? "red" : "green" }}>
                  ⚠️ {issue.status.toUpperCase()}
                </span>
              </Popup>
            </Marker>
          )
      )}
    </MapContainer>
      </div>
    </div>
  </div>
</>


</>

);
}




































