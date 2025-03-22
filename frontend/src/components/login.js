import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './styles/login.css';

export default function Login() {
  const [selectedRole, setSelectedRole] = useState(''); // Track selected role
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate(); // Redirect after successful login

  // Role selection
  const handleRoleSelection = (role) => {
    setSelectedRole(role);
    setErrorMessage(''); // Clear any previous errors
  };

  // Input change handler
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(''); // Reset error messages
    
    try {
      const endpoint =
        selectedRole === 'citizen'
          ? 'http://localhost:5000/api/auth/citizen'
          : 'http://localhost:5000/api/auth/government';

      const response = await axios.post(endpoint, {
        email: formData.email,
        password: formData.password,
      });

      if (response.status === 200) {
        const { token } = response.data;

        // Store the token and role in localStorage
        localStorage.setItem('token', token);
        localStorage.setItem('role', selectedRole); // Store the selected role
        alert('Login successful');

        // Redirect user based on their role
        navigate('/');
      }
    } catch (error) {
      setErrorMessage(error.response?.data?.message || 'Login failed. Please try again.');
    }
  };

  return (
    <>
      <nav className="navbar">
 <Link to="/" className="logo" >
          Civic<span style={{ color: 'blue' }}>Connect</span>
          </Link>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </nav>

      <div className="container">
        <div className="login-card">
          <div className="login-form">
            <h2>Select Your Role</h2>
            <div className="role-buttons">
              <button
                className={`role-btn ${selectedRole === 'citizen' ? 'active' : ''}`}
                onClick={() => handleRoleSelection('citizen')}
              >
                Citizen
              </button>
              <button
                className={`role-btn ${selectedRole === 'government' ? 'active' : ''}`}
                onClick={() => handleRoleSelection('government')}
              >
                Government Authority
              </button>
            </div>

            {/* Conditional rendering of login forms */}
            {selectedRole && (
              <form onSubmit={handleSubmit} className="form-section">
                <h2>{selectedRole === 'citizen' ? 'Citizen Login' : 'Authority Login'}</h2>
                <p>Login to {selectedRole === 'citizen' ? 'track or resolve complaints' : 'manage civic complaints'}</p>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                />
                <button type="submit" className="login-btn">
                  Login
                </button>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
               
              </form>
            )}
          </div>

          {/* Optional image */}
          <div className="login-image">
            <img
              alt="Illustration of a laptop, coffee cup, and plant"
              src="https://storage.googleapis.com/a1aa/image/NGqjc5mXh4rND58P8ldOvND6BbSPEVf1yNIlXwCSfijG8tnTA.jpg"
            />
          </div>
        </div>
      </div>

      <footer className="footer">
        <p>© 2025 CivicConnect. All Rights Reserved.</p>
      </footer>
    </>
  );
}
