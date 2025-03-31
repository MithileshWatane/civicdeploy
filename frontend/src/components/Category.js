import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Search, Filter, AlertTriangle, AlertCircle, ArrowUpDown } from 'lucide-react';
import axios from 'axios'; // Make sure to import axios
import './IssueCategorization.css';

// Define categories and keywords for simple text-based classification
const issueCategories = {
  'INFRASTRUCTURE': ['road', 'bridge', 'building', 'street', 'highway', 'construction', 'infrastructure', 'sidewalk', 'footpath'],
  'WATER': ['water', 'leak', 'pipe', 'sewage', 'drainage', 'flood', 'tap', 'pipeline', 'drinking', 'tank', 'supply'],
  'ELECTRICITY': ['power', 'electricity', 'outage', 'blackout', 'electric', 'transformer', 'voltage', 'wiring', 'cables', 'light'],
  'WASTE': ['garbage', 'trash', 'waste', 'dumping', 'litter', 'cleanliness', 'dustbin', 'disposal', 'sanitation'],
  'TRANSPORTATION': ['traffic', 'transport', 'bus', 'train', 'metro', 'vehicle', 'parking', 'signal', 'commute', 'station'],
  'PUBLIC_SAFETY': ['crime', 'safety', 'security', 'theft', 'violence', 'police', 'accident', 'danger', 'threat', 'unsafe'],
  'NOISE': ['noise', 'loud', 'sound', 'disturbance', 'nuisance'],
  'AIR_QUALITY': ['pollution', 'smog', 'emissions', 'air', 'quality', 'dust', 'smoke'],
  'PUBLIC_HEALTH': ['health', 'disease', 'hospital', 'clinic', 'medical', 'mosquito', 'epidemic', 'sanitary', 'hygiene'],
  'OTHER': []  // default category
};

// Category icons and colors mapping
const categoryStyles = {
  'INFRASTRUCTURE': { color: '#3B82F6', bgColor: '#EFF6FF', icon: '🏗️' },
  'WATER': { color: '#0EA5E9', bgColor: '#F0F9FF', icon: '💧' },
  'ELECTRICITY': { color: '#F59E0B', bgColor: '#FFFBEB', icon: '⚡' },
  'WASTE': { color: '#84CC16', bgColor: '#F7FEE7', icon: '🗑️' },
  'TRANSPORTATION': { color: '#8B5CF6', bgColor: '#F5F3FF', icon: '🚌' },
  'PUBLIC_SAFETY': { color: '#EF4444', bgColor: '#FEF2F2', icon: '🛡️' },
  'NOISE': { color: '#EC4899', bgColor: '#FDF2F8', icon: '🔊' },
  'AIR_QUALITY': { color: '#10B981', bgColor: '#ECFDF5', icon: '💨' },
  'PUBLIC_HEALTH': { color: '#6366F1', bgColor: '#EEF2FF', icon: '🏥' },
  'OTHER': { color: '#6B7280', bgColor: '#F9FAFB', icon: '❓' }
};

// Simple stemmer function (much simpler than Porter stemmer)
const simpleStem = (word) => {
  return word
    .toLowerCase()
    .replace(/ing$/, '')
    .replace(/ed$/, '')
    .replace(/s$/, '')
    .replace(/e$/, '');
};

// Stopwords list
const stopwords = [
  'a', 'an', 'the', 'and', 'or', 'but', 'is', 'are', 'was', 'were', 
  'be', 'been', 'being', 'to', 'of', 'for', 'with', 'by', 'about', 
  'against', 'between', 'into', 'through', 'during', 'before', 'after', 
  'above', 'below', 'from', 'up', 'down', 'in', 'out', 'on', 'off', 
  'over', 'under', 'again', 'further', 'then', 'once', 'here', 'there', 
  'when', 'where', 'why', 'how', 'all', 'any', 'both', 'each', 'few', 
  'more', 'most', 'other', 'some', 'such', 'no', 'nor', 'not', 'only', 
  'own', 'same', 'so', 'than', 'too', 'very', 'can', 'will', 'just', 
  'should', 'now'
];

// Simple tokenizer function
const tokenize = (text) => {
  return text
    .toLowerCase()
    .replace(/[^\w\s]/g, ' ')  // Remove punctuation
    .split(/\s+/)              // Split by whitespace
    .filter(word => word.length > 1 && !stopwords.includes(word))
    .map(word => simpleStem(word));
};

// Function to categorize an issue
const categorizeIssue = (issue) => {
  const text = `${issue.title} ${issue.description}`.toLowerCase();
  const tokens = tokenize(text);
  
  // Calculate score for each category
  const scores = {};
  let maxScore = 0;
  let maxCategory = 'OTHER';
  
  Object.entries(issueCategories).forEach(([category, keywords]) => {
    const stemmedKeywords = keywords.map(keyword => simpleStem(keyword));
    
    let score = 0;
    tokens.forEach(token => {
      if (stemmedKeywords.includes(token)) {
        score += 1;
      }
    });
    
    scores[category] = score;
    
    if (score > maxScore) {
      maxScore = score;
      maxCategory = category;
    }
  });
  
  return {
    ...issue,
    category: maxScore > 0 ? maxCategory : 'OTHER',
    confidence: maxScore
  };
};

// Component for issue card
// Enhanced IssueCard component with dynamic styling
const IssueCard = ({ issue }) => {
  const [expanded, setExpanded] = useState(false);
  const { color, bgColor, icon } = categoryStyles[issue.category];
  const isHighConfidence = issue.confidence > 2;
  
  // Set CSS variables for dynamic styling
  const cardStyle = {
    '--category-color': color,
    '--category-hover-color': darkenColor(color),
    '--icon-bg-color': bgColor,
    '--metadata-color': color
  };
  
  // Simple function to darken a color for hover states
  function darkenColor(color) {
    // This is a simple implementation - for production you might want a more sophisticated color manipulation
    return color === '#3B82F6' ? '#2563EB' : color;
  }
  
  return (
    <div 
      className="category-issue-card" 
      style={cardStyle}
      data-high-confidence={isHighConfidence}
    >
      <div 
        className="category-issue-card-header"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="category-issue-card-content">
          <div className="category-issue-card-category">
            <span className="issue-icon">{icon}</span>
            <span 
              className="category-badge"
              style={{ backgroundColor: bgColor, color: color }}
            >
              {issue.category.replace('_', ' ')}
            </span>
            {isHighConfidence && (
              <span className="confidence-badge">
                High Confidence
              </span>
            )}
          </div>
          <h3 className="issue-title">{issue.title}</h3>
          <p className="issue-description">
            {expanded ? issue.description : `${issue.description.substring(0, 100)}${issue.description.length > 100 ? '...' : ''}`}
          </p>
        </div>
        <div className="expand-button">
          <span className={`expand-badge ${expanded ? 'expanded' : ''}`}>
            {expanded ? 'Hide' : 'Expand'}
          </span>
        </div>
      </div>
      {expanded && (
        <div className="category-issue-card-details">
          <div className="issue-metadata">
            <span>ID: {issue._id}</span>
            <span>Score: {issue.confidence}</span>
            <span>Status: {issue.status}</span>
            <span>Location: {issue.location}</span>
          </div>
          
        </div>
      )}
    </div>
  );
};

// Main component
const IssueCategorization = () => {
  const [issues, setIssues] = useState([]);
  const [categorizedIssues, setCategorizedIssues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [sortBy, setSortBy] = useState('confidence');
  const [sortDirection, setSortDirection] = useState('desc');
  const [view, setView] = useState('list'); // 'list', 'stats'
  
  useEffect(() => {
    const fetchAndCategorizeIssues = async () => {
      try {
        // Replace mock data with actual API call
        const response = await axios.get('http://localhost:5000/api/issues/get', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`, // Send the token for authentication
          },
        });
        
        const fetchedIssues = response.data.issues;
        setIssues(fetchedIssues);
        
        // Categorize each issue
        const withCategories = fetchedIssues.map(issue => categorizeIssue(issue));
        setCategorizedIssues(withCategories);
        
        setLoading(false);
      } catch (error) {
        console.error('Error fetching and categorizing issues:', error);
        setLoading(false);
      }
    };
    
    fetchAndCategorizeIssues();
  }, []);
  
  // Filter issues based on search query and selected category
  const filteredIssues = categorizedIssues.filter(issue => {
    const matchesSearch = searchQuery === '' || 
      issue.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      issue.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === 'ALL' || issue.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });
  
  // Sort issues
  const sortedIssues = [...filteredIssues].sort((a, b) => {
    if (sortBy === 'confidence') {
      return sortDirection === 'asc' ? a.confidence - b.confidence : b.confidence - a.confidence;
    } else if (sortBy === 'title') {
      return sortDirection === 'asc' 
        ? a.title.localeCompare(b.title) 
        : b.title.localeCompare(a.title);
    }
    return 0;
  });
  
  // Group issues by category
  const issuesByCategory = categorizedIssues.reduce((acc, issue) => {
    const category = issue.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(issue);
    return acc;
  }, {});
  
  // Prepare data for chart
  const chartData = Object.entries(issuesByCategory).map(([category, issues]) => ({
    name: category.replace('_', ' '),
    count: issues.length,
    color: categoryStyles[category].color
  }));
  
  const toggleSort = (field) => {
    if (sortBy === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(field);
      setSortDirection('desc');
    }
  };
  
  return (
    <>
    <nav className="navbar">
            <Link to="/" className="logo">
              Civic<span style={{ color: 'blue' }}>Connect</span>
            </Link>
            <ul>
            <li><Link to="/dashboard">Dashboard</Link></li>
              <li><Link to="/">Home</Link></li>
            </ul>
            
          </nav>
    <div className="app-container">
      <div className="dashboard-container">
        <div className="dashboard-header">
          <h1 className="dashboard-title">Issue Categorization Dashboard</h1>
          <p className="dashboard-subtitle">Automated categorization of community issues using keyword analysis</p>
        </div>
        
        {/* Stats Overview */}
        <div className="stats-grid">
          <div className="stat-card blue">
            <div className="stat-content">
              <div className="stat-icon">
                <AlertCircle size={24} />
              </div>
              <div className="stat-info">
                <h2 className="stat-label">Total Issues</h2>
                <p className="stat-value">{issues.length}</p>
              </div>
            </div>
          </div>
          
          <div className="stat-card green">
            <div className="stat-content">
              <div className="stat-icon">
                <Filter size={24} />
              </div>
              <div className="stat-info">
                <h2 className="stat-label">Categories</h2>
                <p className="stat-value">{Object.keys(issuesByCategory).length}</p>
              </div>
            </div>
          </div>
          
          <div className="stat-card purple">
            <div className="stat-content">
              <div className="stat-icon">
                <AlertTriangle size={24} />
              </div>
              <div className="stat-info">
                <h2 className="stat-label">High Priority</h2>
                <p className="stat-value">
                  {categorizedIssues.filter(i => i.confidence > 2).length}
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Controls */}
        <div className="controls-container">
          <div className="search-container">
            <div className="search-field">
              <div className="search-icon">
                <Search size={18} />
              </div>
              <input
                type="text"
                className="search-input"
                placeholder="Search issues..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          
          <div className="filter-controls">
            <select
              className="category-select"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="ALL">All Categories</option>
              {Object.keys(issueCategories).map(category => (
                <option key={category} value={category}>
                  {category.replace('_', ' ')}
                </option>
              ))}
            </select>
            
            <div className="view-toggle">
              <button
                className={`toggle-button left ${view === 'list' ? 'active' : ''}`}
                onClick={() => setView('list')}
              >
                List
              </button>
              <button
                className={`toggle-button right ${view === 'stats' ? 'active' : ''}`}
                onClick={() => setView('stats')}
              >
                Stats
              </button>
            </div>
          </div>
        </div>
        
        {loading ? (
          <div className="loading-container">
            <div className="loading-spinner"></div>
          </div>
        ) : (
          <>
            {view === 'list' ? (
              <div className="issues-container">
                <div className="issues-header">
                  <div className="issues-header-content">
                    <h2 className="issues-title">Issues ({sortedIssues.length})</h2>
                    <div className="sort-options">
                      <button 
                        className="sort-button"
                        onClick={() => toggleSort('title')}
                      >
                        Title
                        <ArrowUpDown size={14} className="sort-icon" />
                      </button>
                      <button 
                        className="sort-button"
                        onClick={() => toggleSort('confidence')}
                      >
                        Confidence
                        <ArrowUpDown size={14} className="sort-icon" />
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="issues-list">
                  {sortedIssues.length === 0 ? (
                    <div className="no-issues">
                      No issues found matching your criteria
                    </div>
                  ) : (
                    <div className="category-issues-grid">
                      {sortedIssues.map(issue => (
                        <IssueCard key={issue._id} issue={issue} />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="stats-view">
                <div className="chart-container">
                  <h3 className="chart-title">Issues by Category</h3>
                  <div className="chart-wrapper">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={chartData}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                      >
<XAxis 
  dataKey="name" 
  angle={-45} 
  textAnchor="end" 
  height={80} 
  tick={{fontSize: 12}}
  interval={0}
/>                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="count" nameKey="name" fill="#3B82F6">
                        {chartData.map((entry, index) => (
                            <rect key={`rect-${index}`} fill={entry.color} />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
                
                <div className="distribution-container">
                  <h3 className="chart-title">Category Distribution</h3>
                  <div className="distribution-list">
                    {Object.entries(issuesByCategory).map(([category, categoryIssues]) => (
                      <div key={category} className="category-item">
                        <div className="category-icon">
                          <span>{categoryStyles[category].icon}</span>
                        </div>
                        <div className="category-details">
                          <div className="category-header">
                            <span className="category-name">{category.replace('_', ' ')}</span>
                            <span className="category-count">{categoryIssues.length} issues</span>
                          </div>
                          <div className="progress-bar-bg">
                            <div 
                              className="progress-bar-fill" 
                              style={{
                                width: `${(categoryIssues.length / categorizedIssues.length) * 100}%`,
                                backgroundColor: categoryStyles[category].color
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>



    <footer>
        <p>© 2025 CivicConnect. All Rights Reserved.</p>
      </footer>
    </>
  );
};

export default IssueCategorization;