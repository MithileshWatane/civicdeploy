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
  const navigate = useNavigate();

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
      const response = await fetch('https://civicdeploy-1.onrender.com/api/issues/report', {
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
      <div className="issue-form">
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div>
            <label htmlFor="title">Issue Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="description">Issue Description:</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="location">Location:</label>
            <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                placeholder="Enter an address or location name"
                style={{ flex: 1 }}
              />
              <button 
                type="button" 
                onClick={handleGeocoding}
                style={{ padding: '0 15px', cursor: 'pointer' }}
                disabled={isSearching}
              >
                {isSearching ? 'Searching...' : 'Search'}
              </button>
            </div>
          </div>
          <div>
            <label>Location on Map:</label>
            <div style={{ height: '300px', width: '100%', position: 'relative', marginBottom: '10px' }}>
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
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
              <button 
                type="button"
                onClick={handleLocateMe}
                style={{ 
                  padding: '8px 15px', 
                  backgroundColor: '#4285F4', 
                  color: 'white', 
                  border: 'none', 
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                Get Current Location
              </button>
              <p className="coordinates-display" style={{ margin: 0 }}>
                Coordinates: {coordinates.lat.toFixed(6)}, {coordinates.lng.toFixed(6)}
              </p>
            </div>
          </div>
          <div>
            <label htmlFor="governmentAuthority">Assign to Authority:</label>
            <select
              id="governmentAuthority"
              name="governmentAuthority"
              value={formData.governmentAuthority}
              onChange={handleInputChange}
              required
            >
              <option value="">Select Authority</option>
              {Authorities.map((auth) => (
                <option key={auth._id} value={auth._id}>{auth.name}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="images">Upload Images:</label>
            <input
              type="file"
              id="images"
              name="images"
              multiple
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>
          <button type="submit">Submit Issue</button>
        </form>
      </div>
    </>
  );
};

export default CivicIssueForm;