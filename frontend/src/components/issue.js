import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, useMapEvents, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import './styles/complaints.css';

// Custom icon to fix missing marker issue
const customIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

// Component to handle map centering and updates
const MapController = ({ coordinates, setCoordinates, locateMe, resetLocateMe }) => {
  const map = useMap();
  
  // Handle location button click
  useEffect(() => {
    if (locateMe) {
      map.locate({
        setView: true,
        maxZoom: 16
      });
      resetLocateMe(); // Reset the trigger after attempting to locate
    }
  }, [map, locateMe, resetLocateMe]);
  
  // Handle map events
  useMapEvents({
    locationfound(e) {
      setCoordinates({ lat: e.latlng.lat, lng: e.latlng.lng });
      map.flyTo(e.latlng, 16);
    },
    locationerror(e) {
      console.error("Location error:", e.message);
      alert("Could not access your location. Please allow location access or manually select a location on the map.");
      resetLocateMe();
    },
    click(e) {
      setCoordinates({ lat: e.latlng.lat, lng: e.latlng.lng });
    }
  });
  
  // Update map when coordinates change
  useEffect(() => {
    map.flyTo([coordinates.lat, coordinates.lng], 16);
  }, [map, coordinates]);
  
  return null;
};

const CivicIssueForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    location: '',
    latitude: '',
    longitude: '',
    governmentAuthority: '',
  });

  const [coordinates, setCoordinates] = useState({ lat: 28.7041, lng: 77.1025 }); // Default location
  const [images, setImages] = useState([]);
  const [Authorities, setAuthorities] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [locateMe, setLocateMe] = useState(false);
  const [activeTab, setActiveTab] = useState('citizens'); // 'citizens' or 'government'
  const navigate = useNavigate();
  const [uploadedFileNames, setUploadedFileNames] = useState([]);

  // Function to trigger location finding
  const handleLocateMe = () => {
    setLocateMe(true);
  };

  // Function to reset location trigger
  const resetLocateMe = () => {
    setLocateMe(false);
  };

  useEffect(() => {
    const fetchAuthorities = async () => {
      try {
        const response = await fetch('https://civicdeploy-1.onrender.com/api/government-authorities/get');
        const data = await response.json();
        setAuthorities(data);
      } catch (error) {
        console.error('Error fetching authorities:', error);
      }
    };

    fetchAuthorities();
  }, []);

  useEffect(() => {
    // Update form data with new coordinates
    setFormData(prevData => ({
      ...prevData,
      latitude: coordinates.lat,
      longitude: coordinates.lng,
    }));
  }, [coordinates]);

  // Function to handle location search
  const handleGeocoding = async (e) => {
    e.preventDefault(); // Prevent form submission
    
    if (!formData.location.trim()) return;
    
    setIsSearching(true);
    
    try {
      // Using Nominatim for geocoding
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(formData.location)}&limit=1`
      );
      const data = await response.json();
      
      if (data && data.length > 0) {
        const { lat, lon } = data[0];
        
        // Update coordinates
        setCoordinates({
          lat: parseFloat(lat), 
          lng: parseFloat(lon)
        });
        
        console.log("Search successful:", { lat, lon });
      } else {
        alert('Location not found. Please try a different address or select on map.');
      }
    } catch (error) {
      console.error('Geocoding error:', error);
      alert('Error finding location. Please try again or select on map.');
    } finally {
      setIsSearching(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    setImages(e.target.files);
    // Add this to display file names
    const fileNames = Array.from(e.target.files).map(file => file.name);
    setUploadedFileNames(fileNames); // Add this state below
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append('title', formData.title);
    formDataToSend.append('description', formData.description);
    formDataToSend.append('location', formData.location);
    formDataToSend.append('latitude', formData.latitude);
    formDataToSend.append('longitude', formData.longitude);
    formDataToSend.append('governmentAuthority', formData.governmentAuthority);

    for (let i = 0; i < images.length; i++) {
      formDataToSend.append('images', images[i]);
    }

    try {
      const response = await fetch('http://localhost:5000/api/issues/report', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: formDataToSend,
      });

      const data = await response.json();

      if (response.ok) {
        alert('Issue reported successfully!');
        setFormData({ title: '', description: '', location: '', latitude: '', longitude: '', governmentAuthority: '' });
        setImages([]);
        navigate('/profile');
      } else {
        alert(data.message || 'Failed to report the issue. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting issue:', error);
      alert('An error occurred while reporting the issue.');
    }
  };

  // Benefits data for right sidebar
  const citizenBenefits = [
    {
      icon: '📝',
      title: 'Easy Reporting',
      description: 'Quickly document issues with our simple form and map interface.'
    },
    {
      icon: '📍',
      title: 'Precise Location',
      description: 'Mark exact locations to help authorities address issues efficiently.'
    },
    {
      icon: '📱',
      title: 'Visual Evidence',
      description: 'Upload images to provide clear visual context of the problem.'
    },
    {
      icon: '🔔',
      title: 'Status Updates',
      description: 'Receive notifications as your issue progresses toward resolution.'
    }
  ];

  const governmentBenefits = [
    {
      icon: '🎯',
      title: 'Accurate Information',
      description: 'Receive detailed reports with precise locations and visual evidence.'
    },
    {
      icon: '📊',
      title: 'Resource Planning',
      description: 'Efficiently allocate resources based on accurate issue documentation.'
    },
    {
      icon: '🔍',
      title: 'Issue Verification',
      description: 'Photo evidence helps verify issues before dispatching field teams.'
    },
    {
      icon: '📈',
      title: 'Performance Tracking',
      description: 'Monitor resolution times and citizen satisfaction with each report.'
    }
  ];

  return (
    <>
      <nav className="navbar" style={{ zIndex: 1001 }}>
        <Link to="/" className="logo">Civic<span style={{ color: 'blue' }}>Connect</span></Link>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/trending">Trending Issues</Link></li>
          <li><Link to="/community">Community</Link></li>
        </ul>
      </nav>
      
      <div className="trending-split-container">
        {/* Left side: Issue form */}
        <div 
  className="issue-form-section" 
style={{ flex: 1, maxWidth: '60%', margin: '30px', padding: '15px' }}>    
      <div className="trending-header">
            <h1>Report an <span className="text-orange">Issue</span></h1>
            <p>Help improve your community by reporting problems that need attention</p>
          </div>
          
          <div className="issue-form-container" style={{ 
            backgroundColor: 'white', 
            borderRadius: '8px', 
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
            padding: '24px',
            marginBottom: '20px' 
          }}>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
              <div className="form-group">
                <label htmlFor="title">Issue Title:</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  required
                  className="form-control"
                  placeholder="Enter a descriptive title (e.g., 'Pothole on Main Street')"
                />
              </div>

              <div className="form-group">
                <label htmlFor="description">Issue Description:</label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                  className="form-control"
                  placeholder="Provide details about the issue, including size, severity, and impact on the community"
                  rows="4"
                />
              </div>

              <div className="form-group">
                <label htmlFor="location">Location:</label>
                <div className="location-input-group">
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    placeholder="Enter an address or location name"
                    className="form-control"
                    style={{ flex: 1 }}
                  />
                  <button 
                    type="button" 
                    onClick={handleGeocoding}
                    className="search-button"
                    disabled={isSearching}
                  >
                    {isSearching ? 'Searching...' : 'Search'}
                  </button>
                </div>
              </div>

              <div className="form-group">
                <label>Location on Map:</label>
                <div className="map-container" style={{ 
                  height: '250px', 
                  position: 'relative', 
                  borderRadius: '8px',
                  overflow: 'hidden',
                  border: '1px solid #ddd'
                }}>
                  <MapContainer 
                    center={[coordinates.lat, coordinates.lng]}
                    zoom={13} 
                    style={{ height: '100%', width: '100%' }}
                  >
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <MapController 
                      coordinates={coordinates}
                      setCoordinates={setCoordinates}
                      locateMe={locateMe}
                      resetLocateMe={resetLocateMe}
                    />
                    <Marker position={[coordinates.lat, coordinates.lng]} icon={customIcon} />
                  </MapContainer>
                </div>
                <div className="map-controls">
                  <button 
                    type="button"
                    onClick={handleLocateMe}
                    className="locate-button"
                  >
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="10" r="3" />
                      <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 7 8 11.7z" />
                    </svg>
                    Get Current Location
                  </button>
                  <p className="coordinates-display">
                    Coordinates: {coordinates.lat.toFixed(6)}, {coordinates.lng.toFixed(6)}
                  </p>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="governmentAuthority">Assign to Authority:</label>
                <select
                  id="governmentAuthority"
                  name="governmentAuthority"
                  value={formData.governmentAuthority}
                  onChange={handleInputChange}
                  required
                  className="form-control"
                >
                  <option value="">Select Authority</option>
                  {Authorities.map((auth) => (
                    <option key={auth._id} value={auth._id}>{auth.name}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
  <label htmlFor="images">Upload Images:</label>
  <div className="file-input-container">
    <input
      type="file"
      id="images"
      name="images"
      multiple
      accept="image/*"
      onChange={handleImageChange}
      className="file-input"
    />
    <div className="file-input-label">
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4m14-7l-5-5-5 5m5-5v12" />
      </svg>
      <span>Upload Images</span>
    </div>
    <small className="help-text">Upload clear images showing the issue (max 5 images)</small>
    
    {/* Add this to display file names */}
    {uploadedFileNames.length > 0 && (
      <div className="uploaded-files">
        <p>Selected files:</p>
        <ul>
          {uploadedFileNames.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
      </div>
    )}
  </div>
</div>


              <button type="submit" className="submit-button">Submit Issue</button>
            </form>
          </div>
        </div>

        {/* Right side: Benefits information */}
        <div className="benefits-section" style={{ flex: '1', maxWidth: '40%' }}>
          <div className="benefits-header">
            <h2>Benefits of <span className="text-blue">Reporting</span> Issues</h2>
            <p>How your reports help create a better community for everyone</p>
            
            <div className="benefits-tabs">
              <button 
                className={`tab-button ${activeTab === 'citizens' ? 'active' : ''}`}
                onClick={() => setActiveTab('citizens')}
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
            {activeTab === 'citizens' ? (
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
            
            <div className="how-it-works">
              <h3>How Your Report Helps</h3>
              <ol className="process-list">
                <li>
                  <div className="process-step">1</div>
                  <div className="process-text">You report an issue with accurate details</div>
                </li>
                <li>
                  <div className="process-step">2</div>
                  <div className="process-text">The appropriate authority reviews your report</div>
                </li>
                <li>
                  <div className="process-step">3</div>
                  <div className="process-text">Community members can upvote to show support</div>
                </li>
                <li>
                  <div className="process-step">4</div>
                  <div className="process-text">Local government addresses the issue</div>
                </li>
                <li>
                  <div className="process-step">5</div>
                  <div className="process-text">You receive updates as progress is made</div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <footer id="contact" >
        <p>© 2025 CivicConnect. All Rights Reserved.</p>
      </footer>

      <style jsx>{`
        .trending-split-container {
          display: flex;
          flex-wrap: wrap;
          margin: 30px auto;
          gap: 20px;
          padding: 0 20px;
        }

        .trending-header h1 {
          font-size: 2rem;
          margin-bottom: 8px;
        }

        .trending-header p {
          font-size: 1rem;
          color: #666;
          margin-bottom: 24px;
        }

        .text-orange {
          color: #ff6b35;
        }

        .text-blue {
          color: #3498db;
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-group label {
          display: block;
          font-weight: 600;
          margin-bottom: 8px;
          color: #333;
        }

        .form-control {
          width: 95%;
          padding: 12px;
          border: 1px solid #ddd;
          border-radius: 6px;
          font-size: 16px;
        }

        .form-control:focus {
          border-color: #3498db;
          outline: none;
          box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.2);
        }

        .location-input-group {
          display: flex;
          gap: 10px;
          margin : 0px;
          padding : 0px;
        }

  .search-button {
    padding: 5px 20px;  /* Reduce vertical padding */
    height: 50px;  /* Adjust height */
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-weight: 600;
}


        .search-button:hover {
          background-color: #2980b9;
        }

        .search-button:disabled {
          background-color: #95a5a6;
          cursor: not-allowed;
        }

        .map-controls {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 12px;
        }

        .locate-button {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 15px;
          background-color: #4285F4;
          color: white;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          font-weight: 500;
        }

        .locate-button:hover {
          background-color: #3367d6;
        }

        .coordinates-display {
          margin: 0;
          font-size: 14px;
          color: #666;
        }

        .file-input-container {
          position: relative;
        }

        .file-input {
          position: absolute;
          left: 0;
          top: 0;
          opacity: 0;
          width: 100%;
          height: 100%;
          cursor: pointer;
        }

        .file-input-label {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px;
          border: 2px dashed #ddd;
          border-radius: 6px;
          cursor: pointer;
          text-align: center;
          color: #666;
        }

        .file-input-label:hover {
          border-color: #3498db;
          color: #3498db;
        }

        .help-text {
          display: block;
          margin-top: 6px;
          font-size: 12px;
          color: #888;
        }

        .submit-button {
          width: 100%;
          padding: 14px;
          background-color: #3498db;
          color: white;
          border: none;
          border-radius: 6px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: background-color 0.2s;
        }

        .submit-button:hover {
          background-color: #219653;
        }

        /* Benefits Section Styling */
        .benefits-header h2 {
          font-size: 1.8rem;
          margin-bottom: 8px;
        }

        .benefits-tabs {
          display: flex;
          margin: 24px 0;
          background-color: #f1f5f9;
          border-radius: 8px;
          padding: 4px;
        }

        .tab-button {
          flex: 1;
          padding: 12px;
          text-align: center;
          background: none;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          font-weight: 600;
          color: #64748b;
        }

        .tab-button.active {
          background-color: white;
          color: #3498db;
          box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }

        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
          margin-bottom: 24px;
        }

        .benefit-card {
          background-color: white;
          border-radius: 8px;
          padding: 16px;
          box-shadow: 0 2px 5px rgba(0,0,0,0.05);
        }

        .benefit-icon {
          font-size: 2rem;
          margin-bottom: 12px;
        }

        .benefit-card h3 {
          margin: 0 0 8px;
          font-size: 1.1rem;
          color: #333;
        }

        .benefit-card p {
          margin: 0;
          font-size: 0.9rem;
          color: #666;
          line-height: 1.5;
        }

        .impact-stats {
          grid-column: span 2;
          background-color: #f8f9fa;
          border-radius: 8px;
          padding: 16px;
        }

        .impact-stats h3 {
          margin: 0 0 12px;
          font-size: 1.2rem;
          color: #333;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
        }

        .stat-item {
          text-align: center;
        }

        .stat-value {
          font-size: 1.8rem;
          font-weight: 700;
          color: #3498db;
        }

        .stat-label {
          font-size: 0.9rem;
          color: #666;
          line-height: 1.4;
        }

        .how-it-works {
          background-color: white;
          border-radius: 8px;
          padding: 20px;
          margin-top: 24px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
        }

        .how-it-works h3 {
          margin: 0 0 16px;
          font-size: 1.2rem;
          color: #333;
        }

        .process-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .process-list li {
          display: flex;
          align-items: center;
          margin-bottom: 12px;
          padding-bottom: 12px;
          border-bottom: 1px solid #eee;
        }

        .process-list li:last-child {
          border-bottom: none;
          margin-bottom: 0;
          padding-bottom: 0;
        }

        .process-step {
          width: 30px;
          height: 30px;
          background-color: #3498db;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          margin-right: 12px;
          flex-shrink: 0;
        }

        .process-text {
          font-size: 0.95rem;
          color: #444;
        }

        /* Add this to your existing styles */
  .uploaded-files {
    margin-top: 12px;
    background-color: #f8f9fa;
    padding: 10px;
    border-radius: 6px;
    border: 1px solid #e9ecef;
  }
  
  .uploaded-files p {
    margin: 0 0 6px;
    font-size: 14px;
    font-weight: 500;
    color: #555;
  }
  
  .uploaded-files ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .uploaded-files li {
    font-size: 13px;
    color: #666;
    padding: 3px 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
  }
      `}</style>
    </>
  );
};

export default CivicIssueForm;