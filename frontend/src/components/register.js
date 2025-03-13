import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './styles/register.css';

export default function Register() {
  const [selectedRole, setSelectedRole] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    location: '',
    department: '',
  });
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleRoleSelection = (role) => {
    setSelectedRole(role);
    // Clear unnecessary fields when switching roles
    if (role === 'citizen') {
      setFormData((prevData) => ({ ...prevData, location: '', department: '' }));
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedRole) {
      setErrorMessage('Please select a role before registering.');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }

    try {
      const endpoint =
        selectedRole === 'citizen'
          ? 'http://localhost:5000/api/register/citizen'
          : 'http://localhost:5000/api/register/government';

      const payload =
        selectedRole === 'citizen'
          ? {
              name: formData.name,
              email: formData.email,
              password: formData.password,
            }
          : {
              name: formData.name,
              email: formData.email,
              password: formData.password,
              location: formData.location,
              department: formData.department,
            };

      const response = await axios.post(endpoint, payload);

      if (response.status === 201) {
        alert("Registered Successfully")
        navigate('/');
      }
    } catch (error) {
      setErrorMessage(error.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <>
      <div className="navbar">
         <Link to="/" className="logo" >
                  Civic<span style={{ color: 'blue' }}>Connect</span>
                  </Link>
        <ul className="nav-links">
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </div>

      <div className="register-wrapper">
        <div className="register-content">
          <h2>Select Registration Type</h2>
          <div className="role-selection">
            <button
              onClick={() => handleRoleSelection('citizen')}
              className={`role-btn ${selectedRole === 'citizen' ? 'active' : ''}`}
            >
              Register as Citizen
            </button>
            <button
              onClick={() => handleRoleSelection('government')}
              className={`role-btn ${selectedRole === 'government' ? 'active' : ''}`}
            >
              Register as Government Authority
            </button>
          </div>

          {selectedRole && (
            <div className="register-card tab-content active">
              <h2>{selectedRole === 'citizen' ? 'Create a Citizen Account' : 'Create a Government Account'}</h2>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                />
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  required
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
                {selectedRole === 'government' && (
                  <>
                    <input
                      type="text"
                      name="location"
                      placeholder="Location (City/District)"
                      required
                      value={formData.location}
                      onChange={handleChange}
                    />
                    <select
      name="department"
      required
      value={formData.department}
      onChange={handleChange}
    >
      <option value="">Select Department</option>
      <option value="Road safety">Road Safety</option>
      <option value="Garbage">Garbage</option>
      <option value="Electricity">Electricity</option>
      <option value="Water supply">Water Supply</option>
      <option value="Infrastructural">Infrastructural</option>
      <option value="Natural disaster">Natural Disaster</option>
      <option value="Trees related">Trees Related</option>
      <option value="Animal related">Animal Related</option>
    </select>
                  </>
                )}
                <button type="submit" className="register-btn">
                  Register as {selectedRole === 'citizen' ? 'Citizen' : 'Authority'}
                </button>
              </form>
              {errorMessage && <p className="error-message">{errorMessage}</p>}
              <div className="register-links">
                <Link to="/login">Already have an account? Login</Link>
              </div>
            </div>
          )}
        </div>
      </div>

      <footer className="footer">
        <p>© 2025 CivicConnect. All rights reserved.</p>
      </footer>
    </>
  );
}
