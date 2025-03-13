import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import './styles/complaints.css';

// Custom icon to fix missing marker issue
const customIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const LocationSelector = ({ setLocation }) => {
  useMapEvents({
    click(e) {
      setLocation({ lat: e.latlng.lat, lng: e.latlng.lng });
    },
  });
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

  const [coordinates, setCoordinates] = useState({ lat: 28.7041, lng: 77.1025 }); // Default location (Delhi)
  const [images, setImages] = useState([]);
  const [Authorities, setAuthorities] = useState([]);
  const navigate = useNavigate();

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
    setFormData((prevData) => ({
      ...prevData,
      latitude: coordinates.lat,
      longitude: coordinates.lng,
    }));
  }, [coordinates]);

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

  return (
    <>
      <nav className="navbar" style={{ zIndex: 1001}}>
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
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              placeholder="Enter location as a string (e.g., '123 Main St, Springfield')"
              required
            />
          </div>
          <div>
            <label htmlFor="coordinates">Select Location on Map:</label>
            <MapContainer center={[coordinates.lat, coordinates.lng]} zoom={13} style={{ height: '300px', width: '100%' }}>
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <LocationSelector setLocation={setCoordinates} />
              <Marker position={[coordinates.lat, coordinates.lng]} icon={customIcon} />
            </MapContainer>
            <p>Selected Location: {coordinates.lat}, {coordinates.lng}</p>
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
