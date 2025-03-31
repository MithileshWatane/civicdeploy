import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, PieChart, Pie, Cell, Legend , LineChart , Line } from 'recharts';
import './styles/dashboard.css';
import { Link } from 'react-router-dom';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { Download , Search} from 'lucide-react'; // Make sure to import Download icon


export default function Dashboard() {
  const [role, setRole] = useState(null);
  const [complaints, setComplaints] = useState([]);
  const [text, setText] = useState("");

// Add these new state variables at the beginning of your Dashboard component
const [currentPage, setCurrentPage] = useState(1);
const [itemsPerPage, setItemsPerPage] = useState(5);
const [locationFilter, setLocationFilter] = useState('');
const [uniqueLocations, setUniqueLocations] = useState([]);
const [searchQuery, setSearchQuery] = useState('');

  const [filteredComplaints, setFilteredComplaints] = useState([]);
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedTitle, setSelectedTitle] = useState(null);
  const [uniqueTitles, setUniqueTitles] = useState(null);
  const [issueCounts, setIssueCounts] = useState({
    total: 0,
    reported: 0,
    inProgress: 0,
    resolved: 0,
  });
  const [modalData, setModalData] = useState(null);
  const [estimatedCompletion, setEstimatedCompletion] = useState('');
  const [inProgressDescription, setInProgressDescription] = useState(''); // New state for in-progress description
  const [resolvedDescription, setResolvedDescription] = useState(''); // New state for resolved description
  const [progressLogs, setProgressLogs] = useState({});
  const [expandedComplaints, setExpandedComplaints] = useState({});
// Add these utility functions for pagination
const indexOfLastItem = currentPage * itemsPerPage;
const indexOfFirstItem = indexOfLastItem - itemsPerPage;
const currentItems = filteredComplaints.slice(indexOfFirstItem, indexOfLastItem);
const totalPages = Math.ceil(filteredComplaints.length / itemsPerPage);

const paginate = (pageNumber) => setCurrentPage(pageNumber);

// Create this component for the pagination controls
const Pagination = () => {
  const pageNumbers = [];
  
  // Generate page numbers
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }
  
  // Show only a window of pages
  const getVisiblePages = () => {
    const maxPagesToShow = 5;
    if (totalPages <= maxPagesToShow) return pageNumbers;
    
    const halfWindow = Math.floor(maxPagesToShow / 2);
    let start = Math.max(currentPage - halfWindow, 1);
    let end = start + maxPagesToShow - 1;
    
    if (end > totalPages) {
      end = totalPages;
      start = Math.max(totalPages - maxPagesToShow + 1, 1);
    }
    
    const result = [];
    if (start > 1) result.push(1, '...');
    
    for (let i = start; i <= end; i++) {
      result.push(i);
    }
    
    if (end < totalPages) result.push('...', totalPages);
    return result;
  };
  
  return (
    <div className="pagination-container">
      <button 
        onClick={() => paginate(currentPage - 1)} 
        disabled={currentPage === 1}
        className="pagination-btn"
      >
        &laquo; Prev
      </button>
      
      {getVisiblePages().map((number, index) => (
        number === '...' ? 
        <span key={`ellipsis-${index}`} className="pagination-ellipsis">...</span> :
        <button
          key={number}
          onClick={() => paginate(number)}
          className={`pagination-btn ${currentPage === number ? 'pagination-active' : ''}`}
        >
          {number}
        </button>
      ))}
      
      <button 
        onClick={() => paginate(currentPage + 1)} 
        disabled={currentPage === totalPages}
        className="pagination-btn"
      >
        Next &raquo;
      </button>
      
      <div className="items-per-page">
        <label>
          Items per page:
          <select 
            value={itemsPerPage} 
            onChange={(e) => {
              setItemsPerPage(Number(e.target.value));
              setCurrentPage(1); // Reset to first page when changing items per page
            }}
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
          </select>
        </label>
      </div>
    </div>
  );
};




  const generatePDFReport = () => {
    // Create a new jsPDF instance with higher resolution
    const doc = new jsPDF({
      orientation: 'landscape',
      unit: 'mm',
      format: 'a4'
    });
  
    // Color Palette
    const colors = {
      primary: '#007bff',
      secondary: '#6c757d',
      background: '#f4f6f9',
      text: '#333333',
      headerBackground: '#e9ecef'
    };
  
    // Helper function to add header
    const addHeader = () => {
      // Background rectangle for header
      doc.setFillColor(colors.primary);
      doc.rect(0, 0, 297, 20, 'F');
      
      // Title
      doc.setTextColor(255, 255, 255);
      doc.setFontSize(16);
      doc.setFont('helvetica', 'bold');
      doc.text('CivicConnect - Comprehensive Issue Report', 10, 14);
      
      // Date and Time
      doc.setTextColor(255, 255, 255);
      doc.setFontSize(10);
      doc.text(new Date().toLocaleString(), 250, 14, { align: 'right' });
    };
  
    // Helper function to add summary statistics
    const addSummaryStatistics = (yPosition) => {
      doc.setFillColor(colors.headerBackground);
      doc.rect(10, yPosition, 277, 20, 'F');
  
      doc.setTextColor(colors.text);
      doc.setFontSize(12);
      doc.setFont('helvetica', 'bold');
      
      const summaryText = `Total Issues: ${issueCounts.total} | ` +
                          `Reported: ${issueCounts.reported} | ` +
                          `In Progress: ${issueCounts.inProgress} | ` +
                          `Resolved: ${issueCounts.resolved}`;
      
      doc.text(summaryText, 10, yPosition + 13, { align: 'left' });
      
      return yPosition + 25;
    };
  
    // Prepare data with enhanced details
    const reportData = filteredComplaints.map(complaint => {
      const progressLog = progressLogs[complaint._id] || {};
      
      // Enhanced detail extraction
      const getStatusDetails = () => {
        switch(complaint.status) {
          case 'reported':
            return {
              processingDetails: `Reported on: ${new Date(progressLog.reportedDate || complaint.createdAt).toLocaleString()}`,
              additionalInfo: 'Awaiting initial review'
            };
          case 'in progress':
            return {
              processingDetails: `
                Reported: ${new Date(progressLog.reportedDate || complaint.createdAt).toLocaleString()}
                In Progress: ${new Date(progressLog.inProgressDate).toLocaleString()}
                Officer: ${progressLog.officerName || 'Unassigned'}
              `,
              additionalInfo: progressLog.inProgressDescription || 'No progress description'
            };
          case 'resolved':
            return {
              processingDetails: `
                Reported: ${new Date(progressLog.reportedDate || complaint.createdAt).toLocaleString()}
                In Progress: ${new Date(progressLog.inProgressDate).toLocaleString()}
                Resolved: ${new Date(progressLog.resolvedDate).toLocaleString()}
                Officer: ${progressLog.officerName || 'Unassigned'}
              `,
              additionalInfo: progressLog.resolvedDescription || 'No resolution details'
            };
          default:
            return {
              processingDetails: 'No processing information',
              additionalInfo: 'No additional details'
            };
        }
      };
  
      const statusDetails = getStatusDetails();
  
      return [
        complaint._id,
        complaint.title,
        complaint.location,
        complaint.status.charAt(0).toUpperCase() + complaint.status.slice(1),
        statusDetails.processingDetails,
        statusDetails.additionalInfo
      ];
    });
  
    // Add header
    addHeader();
  
    // Add summary statistics
    let yPosition = addSummaryStatistics(25);
  
    // Create table with enhanced styling
    autoTable(doc, {
      startY: yPosition,
      head: [
        ['Issue ID', 'Title', 'Location', 'Status', 'Processing Details', 'Additional Information']
      ],
      body: reportData,
      theme: 'striped',
      styles: { 
        fontSize: 8,
        cellPadding: 3,
        textColor: colors.text,
        lineColor: colors.secondary
      },
      headStyles: {
        fillColor: colors.primary,
        textColor: 255,
        fontSize: 10
      },
      alternateRowStyles: {
        fillColor: colors.background
      },
      columnStyles: {
        4: { cellWidth: 'auto' },
        5: { cellWidth: 'auto' }
      }
    });
  
    // Add footer
    doc.setTextColor(colors.secondary);
    doc.setFontSize(8);
    doc.text('Generated by CivicConnect', 10, doc.internal.pageSize.height - 10);
    doc.text(`${new Date().toLocaleString()}`, 250, doc.internal.pageSize.height - 10, { align: 'right' });
  
    // Save the PDF
    doc.save(`CivicConnect_Comprehensive_Report_${new Date().toISOString().replace(/:/g, '-')}.pdf`);
  };


  const generateDetailedIssuePDF = (complaint) => {
    // Create a new jsPDF instance with higher resolution
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });
  
    // Color Palette
    const colors = {
      primary: '#007bff',
      secondary: '#6c757d',
      background: '#f4f6f9',
      text: '#333333'
    };
  
    // Helper function to add header
    const addHeader = () => {
      // Background rectangle
      doc.setFillColor(colors.primary);
      doc.rect(0, 0, 210, 20, 'F');
      
      // Logo or Title
      doc.setTextColor(255, 255, 255);
      doc.setFontSize(14);
      doc.setFont('helvetica', 'bold');
      doc.text('CivicConnect - Detailed Issue Report', 10, 14);
      
      // Date
      doc.setTextColor(255, 255, 255);
      doc.setFontSize(10);
      doc.text(new Date().toLocaleDateString(), 160, 14);
    };
  
    // Helper function to add section header
    const addSectionHeader = (text, yPosition) => {
      doc.setDrawColor(colors.primary);
      doc.setLineWidth(0.5);
      doc.line(10, yPosition, 200, yPosition);
      
      doc.setTextColor(colors.primary);
      doc.setFontSize(12);
      doc.setFont('helvetica', 'bold');
      doc.text(text, 10, yPosition + 7);
      
      return yPosition + 10;
    };
  
    // Helper function to add detail row
    const addDetailRow = (label, value, yPosition, isImportant = false) => {
      doc.setFont('helvetica', isImportant ? 'bold' : 'normal');
      doc.setTextColor(colors.text);
      doc.setFontSize(10);
      
      // Label
      doc.text(label + ':', 20, yPosition);
      
      // Value with word wrapping
      doc.setFont('helvetica', 'normal');
      const splitValue = doc.splitTextToSize(value || 'Not Specified', 160);
      doc.text(splitValue, 70, yPosition);
      
      return yPosition + (splitValue.length * 5) + 5;
    };
  
    // Fetch the corresponding progress log
    const progressLog = progressLogs[complaint._id] || {};
  
    // Start PDF Generation
    addHeader();
  
    // Issue Details Section
    let yPosition = 30;
    yPosition = addSectionHeader('Issue Information', yPosition);
  
    // Basic Issue Details
    yPosition += 5;
    yPosition = addDetailRow('Issue ID', complaint._id, yPosition, true);
    yPosition = addDetailRow('Title', complaint.title, yPosition, true);
    yPosition = addDetailRow('Description', complaint.description, yPosition);
    yPosition = addDetailRow('Location', complaint.location, yPosition);
    yPosition = addDetailRow('Current Status', 
      complaint.status.charAt(0).toUpperCase() + complaint.status.slice(1), 
      yPosition, true
    );
  
    // Progress Timeline Section
    yPosition = addSectionHeader('Progress Timeline', yPosition + 5);
    yPosition += 5;
  
    // Timeline Details
    yPosition = addDetailRow('Reported Date', 
      progressLog.reportedDate 
        ? new Date(progressLog.reportedDate).toLocaleString() 
        : 'Not Available', 
      yPosition
    );
    yPosition = addDetailRow('Officer Name', 
      progressLog.officerName || 'Not Specified', 
      yPosition, true
    );
    yPosition = addDetailRow('In Progress Date', 
      progressLog.inProgressDate 
        ? new Date(progressLog.inProgressDate).toLocaleString() 
        : 'Not Applicable', 
      yPosition
    );
    yPosition = addDetailRow('Resolved Date', 
      progressLog.resolvedDate 
        ? new Date(progressLog.resolvedDate).toLocaleString() 
        : 'Not Resolved', 
      yPosition
    );
  
    // Descriptions Section
    yPosition = addSectionHeader('Detailed Descriptions', yPosition + 5);
    yPosition += 5;
  
    // Progress and Resolution Descriptions
    yPosition = addDetailRow('Progress Description', 
      progressLog.inProgressDescription || 'No progress description provided', 
      yPosition
    );
    yPosition = addDetailRow('Resolution Description', 
      progressLog.resolvedDescription || 'No resolution description provided', 
      yPosition
    );
  
    // Footer
    doc.setDrawColor(colors.secondary);
    doc.setLineWidth(0.3);
    doc.line(10, 280, 200, 280);
    doc.setTextColor(colors.secondary);
    doc.setFontSize(8);
    doc.text('Generated by CivicConnect', 10, 290);
    doc.text(`${new Date().toLocaleString()}`, 160, 290);
  
    // Save the PDF
    doc.save(`Issue_${complaint._id}_Detailed_Report_${new Date().toISOString().replace(/:/g, '-')}.pdf`);
  };



  const toggleComplaintDetails = (complaintId) => {
    setExpandedComplaints(prev => ({
      ...prev,
      [complaintId]: !prev[complaintId]
    }));
  };
  const bufferToBase64 = (buffer) => {
    const binary = new Uint8Array(buffer).reduce((acc, byte) => acc + String.fromCharCode(byte), '');
    return btoa(binary);
  };

  const [modalImage, setModalImage] = useState(null);

  const openModal = (image) => setModalImage(image);
  const closeModal = () => setModalImage(null);

  const allStatuses = ['all', 'in progress', 'resolved', 'reported'];
  const COLORS = ['#8884d8', '#82ca9d', '#ffc658'];

  const fetchComplaints = async () => {
    const token = localStorage.getItem("token");
  
    try {
      const response = await fetch("http://localhost:5000/api/governmentid/reported-issues", {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      });
  
      if (!response.ok) {
        throw new Error("Failed to fetch complaints");
      }
  
      const data = await response.json();
  
      if (Array.isArray(data.issues)) {
        setComplaints(data.issues);
        setFilteredComplaints(data.issues);
  
        // Compute issue counts
        const reported = data.issues.filter((c) => c.status === "reported").length;
        const inProgress = data.issues.filter((c) => c.status === "in progress").length;
        const resolved = data.issues.filter((c) => c.status === "resolved").length;
        setIssueCounts({ total: data.issues.length, reported, inProgress, resolved });
  
        // Extract unique titles
        setUniqueTitles([...new Set(data.issues.map((c) => c.title))]);
        
        // Extract unique locations
        setUniqueLocations([...new Set(data.issues.map((c) => c.location))]);
  
        // Fetch progress logs **after setting complaints**
        fetchProgressLogs(data.issues);
      }
    } catch (error) {
      console.error("Error fetching complaints:", error);
    }
  };
  const applyFilters = () => {
    let filtered = complaints;
    
    // Apply status filter
    if (statusFilter !== 'all') {
      filtered = filtered.filter(c => c.status === statusFilter);
    }
    
    // Apply location filter
    if (locationFilter) {
      filtered = filtered.filter(c => c.location === locationFilter);
    }
    
    // Apply search query (search in title, description and location)
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(c => 
        (c.title && c.title.toLowerCase().includes(query)) || 
        (c.description && c.description.toLowerCase().includes(query)) || 
        (c.location && c.location.toLowerCase().includes(query))
      );
    }
    
    // Apply selected title filter if any
    if (selectedTitle) {
      filtered = filtered.filter(c => c.title === selectedTitle);
    }
    
    setFilteredComplaints(filtered);
  };
  
  // Add this effect to apply filters when any filter changes
useEffect(() => {
  applyFilters();
}, [statusFilter, locationFilter, searchQuery, complaints]);
  const fetchProgressLogs = async (complaints) => {
    if (!complaints.length) return;
  
    try {
      const response = await fetch("http://localhost:5000/api/get-progress-log", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ issueIds: complaints.map((c) => c._id) }),
      });
  
      if (!response.ok) {
        throw new Error("Failed to fetch progress logs");
      }
  
      const progressData = await response.json();
  
      // Map progress logs by issue ID
      const logs = progressData.reduce((acc, log) => {
        acc[log.issueId] = log;
        return acc;
      }, {});
  
      setProgressLogs(logs);
    } catch (error) {
      console.error("Error fetching progress logs:", error);
    }
  };
  

  const chartData = [
    { name: 'Reported', count: issueCounts.reported },
    { name: 'In Progress', count: issueCounts.inProgress },
    { name: 'Resolved', count: issueCounts.resolved },
  ];
  useEffect(() => {
    // ✅ Fetch role from localStorage when Dashboard loads
    const storedRole = localStorage.getItem('role');
    if (storedRole) {
      setRole(storedRole); // Set state with stored role
    }
  }, []); 

  useEffect(() => {
    fetchComplaints(); // Fetch complaints on component mount
  }, []);

  useEffect(() => {
    filterComplaintsByStatus(statusFilter); // Apply status filter whenever it changes
  }, [statusFilter, complaints]);

  const filterComplaintsByStatus = (status) => {
    const filtered = complaints.filter((c) => status === 'all' || c.status === status);
    setFilteredComplaints(filtered);
    setSelectedTitle(null);
  };

  const filterComplaintsByTitle = (title) => {
    if (selectedTitle === title) {
      setSelectedTitle(null);
      filterComplaintsByStatus(statusFilter);
    } else {
      const filtered = complaints.filter((c) => c.title === title);
      setFilteredComplaints(filtered);
      setSelectedTitle(title);
    }
  };

  const changeStatus = async (id, newStatus) => {
    const token = localStorage.getItem('token');
    const complaint = complaints.find((c) => c._id === id);

    if (!complaint) {
      console.error('Complaint not found:', id);
      return;
    }

    if (complaint.status === 'reported' && newStatus === 'in progress') {
      setModalData({
        issueId: id,
        title: complaint.title || 'Untitled',
        reportedDate: complaint.createdAt || new Date().toISOString(),
        authorityName: complaint.governmentAuthority.name,
        inProgressDate: new Date().toISOString(),
        type: 'inProgress',
      });
      return;
    }

    if (complaint.status === 'in progress' && newStatus === 'resolved') {
      try {
        const response = await fetch(`http://localhost:5000/api/issues/progress-log/${id}`, {
          method: 'GET',
          headers: { 
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
        });

        const logData = await response.json();

        setModalData({
          issueId: id,
          title: complaint.title || 'Untitled',
          reportedDate: complaint.createdAt || new Date().toISOString(),
          authorityName: localStorage.getItem('username') || 'Unknown',
          inProgressDate: logData.inProgressDate || complaint.inProgressDate || new Date().toISOString(),
          resolvedDate: new Date().toISOString(),
          type: 'resolved',
        });
      } catch (error) {
        console.error('Error fetching progress log:', error);
        setModalData({
          issueId: id,
          title: complaint.title || 'Untitled',
          reportedDate: complaint.createdAt || new Date().toISOString(),
          authorityName: localStorage.getItem('username') || 'Unknown',
          inProgressDate: complaint.inProgressDate || new Date().toISOString(),
          resolvedDate: new Date().toISOString(),
          type: 'resolved',
        });
      }
      return;
    }

    try {
      const response = await fetch(`http://localhost:5000/api/issues/modify/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ status: newStatus }),
      });
      if (!response.ok) throw new Error('Failed to update status');
      fetchComplaints();
    } catch (error) {
      console.error('Error changing status:', error);
    }
  };

  const handleModalSubmit = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      alert('Authentication token missing. Please log in again.');
      return;
    }
    if (!modalData || !modalData.issueId || !modalData.title) {
      alert('Error: Incomplete data. Please try again.');
      return;
    }

    const basePayload = {
      issueId: modalData.issueId,
      title: modalData.title,
      reportedDate: modalData.reportedDate,
      authorityName: modalData.authorityName,
      officerName: text, // Use the text state to set officerName
    };

    let payload;
    if (modalData.type === 'inProgress') {
      payload = { 
        ...basePayload, 
        inProgressDate: modalData.inProgressDate, 
        estimatedCompletion, 
        inProgressDescription, // Store in-progress description
        status: 'in progress' 
      };
    } else if (modalData.type === 'resolved') {
      payload = { 
        ...basePayload, 
        inProgressDate: modalData.inProgressDate, 
        resolvedDate: modalData.resolvedDate, 
        resolvedDescription, // Store resolved description
        status: 'resolved' 
      };
    } else {
      alert('Error: Invalid status transition.');
      return;
    }

    try {
      const statusResponse = await fetch(`http://localhost:5000/api/issues/modify/${modalData.issueId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ status: payload.status }),
      });

      const statusData = await statusResponse.json();
      if (!statusResponse.ok) {
        throw new Error(statusData.message || 'Failed to update issue status');
      }

      const logResponse = await fetch('http://localhost:5000/api/issues/progress-log', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      const logData = await logResponse.json();
      if (!logResponse.ok) {
        throw new Error(logData.message || 'Failed to save progress log');
      }

      setModalData(null);
      setEstimatedCompletion('');
      setInProgressDescription(''); // Reset in-progress description
      setResolvedDescription(''); // Reset resolved description
      fetchComplaints();
    } catch (error) {
      console.error('Error submitting modal data:', error);
      alert(`An error occurred: ${error.message}`);
    }
  };


const calculateTimeAnalytics = () => {
  // Initialize data structures for analytics
  const resolutionTimes = [];
  const stageData = [];
  const issuesByMonth = {};
  const resolutionByTitle = {};

  // Process each complaint with progress log data
  filteredComplaints.forEach(complaint => {
    const log = progressLogs[complaint._id];
    
    if (!log) return; // Skip if no log data
    
    // Calculate resolution time (in days)
    if (log.resolvedDate && log.reportedDate) {
      const reportedTime = new Date(log.reportedDate).getTime();
      const resolvedTime = new Date(log.resolvedDate).getTime();
      const daysToResolve = Math.round((resolvedTime - reportedTime) / (1000 * 60 * 60 * 24));
      
      resolutionTimes.push({
        id: complaint._id.substring(0, 5),
        title: complaint.title,
        days: daysToResolve
      });
      
      // Group by title for average resolution time
      if (!resolutionByTitle[complaint.title]) {
        resolutionByTitle[complaint.title] = { total: 0, count: 0 };
      }
      resolutionByTitle[complaint.title].total += daysToResolve;
      resolutionByTitle[complaint.title].count += 1;
    }
    
    // Calculate time in each stage
    if (log.inProgressDate && log.reportedDate) {
      const reportedTime = new Date(log.reportedDate).getTime();
      const inProgressTime = new Date(log.inProgressDate).getTime();
      const reportedStage = Math.round((inProgressTime - reportedTime) / (1000 * 60 * 60 * 24));
      
      // For issues that reached "in progress"
      if (log.resolvedDate) {
        const resolvedTime = new Date(log.resolvedDate).getTime();
        const inProgressStage = Math.round((resolvedTime - inProgressTime) / (1000 * 60 * 60 * 24));
        
        stageData.push({
          id: complaint._id.substring(0, 5),
          reportedStage,
          inProgressStage,
          total: reportedStage + inProgressStage
        });
      }
    }
    
    // Gather issue creation by month for trends
    const reportedDate = new Date(log.reportedDate || complaint.createdAt);
    const monthYear = `${reportedDate.getMonth() + 1}/${reportedDate.getFullYear()}`;
    
    if (!issuesByMonth[monthYear]) {
      issuesByMonth[monthYear] = { month: monthYear, count: 0 };
    }
    issuesByMonth[monthYear].count += 1;
  });
  
  // Convert to arrays for charts
  const resolutionByTitleArray = Object.keys(resolutionByTitle).map(title => ({
    title,
    avgDays: Math.round(resolutionByTitle[title].total / resolutionByTitle[title].count)
  }));
  
  const issuesTrendArray = Object.values(issuesByMonth).sort((a, b) => {
    const [aMonth, aYear] = a.month.split('/');
    const [bMonth, bYear] = b.month.split('/');
    return new Date(aYear, aMonth - 1) - new Date(bYear, bMonth - 1);
  });
  
  return {
    resolutionTimes: resolutionTimes.sort((a, b) => a.days - b.days),
    stageData,
    resolutionByTitle: resolutionByTitleArray.sort((a, b) => a.avgDays - b.avgDays),
    issuesTrend: issuesTrendArray
  };
};

// Add this state and calculation effect
const [timeAnalytics, setTimeAnalytics] = useState({
  resolutionTimes: [],
  stageData: [],
  resolutionByTitle: [],
  issuesTrend: []
});

useEffect(() => {
  if (filteredComplaints.length > 0 && Object.keys(progressLogs).length > 0) {
    const analytics = calculateTimeAnalytics();
    setTimeAnalytics(analytics);
  }
}, [progressLogs]);

// Add these custom tooltip components
const CustomResolutionTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip" style={{
        backgroundColor: '#fff',
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '5px'
      }}>
        <p><strong>{payload[0].payload.title}</strong></p>
        <p>ID: {payload[0].payload.id}</p>
        <p>Days to resolve: <strong>{payload[0].value}</strong></p>
      </div>
    );
  }
  return null;
};

const CustomStageTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip" style={{
        backgroundColor: '#fff',
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '5px'
      }}>
        <p>ID: <strong>{payload[0].payload.id}</strong></p>
        <p>Reported stage: <strong>{payload[0].payload.reportedStage} days</strong></p>
        <p>In progress stage: <strong>{payload[0].payload.inProgressStage} days</strong></p>
        <p>Total resolution time: <strong>{payload[0].payload.total} days</strong></p>
      </div>
    );
  }
  return null;
};


  return (
    <>
      <nav className="navbar">
        <Link to="/" className="logo">
          Civic<span style={{ color: 'blue' }}>Connect</span>
        </Link>
        <ul>
        <button 
            onClick={generatePDFReport} 
            className="download-report-btn"
          >
            <Download size={20} /> 
            Download PDF Report
          </button>
          <li><Link to="/">Home</Link></li>
        </ul>
        
      </nav>
      <section className="dashboard">
      <h1>Authority Dashboard</h1>
     

      <div className="bc">
        <div className="a">
        <div className="visualization-section">
  <h2>Issue Overview</h2>
  <div className="charts">
    {/* Bar Chart */}
    <div className="bar-chart">
      <h3>Issue Counts</h3>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
          <defs>
            <linearGradient id="colorBar" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0.8} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip
            contentStyle={{ backgroundColor: '#f4f4f4', border: 'none', borderRadius: '8px' }}
            itemStyle={{ fontSize: '12px' }}
            formatter={(value) => [`${value} Issues`, 'Count']}
          />
          <Bar dataKey="count" fill="url(#colorBar)" radius={[10, 10, 0, 0]}>
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
    {/* Doughnut Chart */}
    <div className="pie-chart">
      <h3>Issue Distribution</h3>
      <ResponsiveContainer  height={300}>
        <PieChart>
          <Pie
            data={chartData}
            dataKey="count"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={90}
            paddingAngle={5}
            fill="#82ca9d"
            label={({ name, count }) => `${count} ${name}`}
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{ backgroundColor: '#f4f4f4', border: 'none', borderRadius: '8px' }}
            formatter={(value, name) => [`${value} Issues`, name]}
          />
          <Legend iconSize={10} layout="horizontal" verticalAlign="bottom" align="center" />
        </PieChart>
      </ResponsiveContainer>
    </div>
  </div>
  <div className="visualization-section advanced-analytics">
  <h2>Time-Based Analytics</h2>
  
  <div className="charts analytics-charts">
    {/* Resolution Time Chart */}
    <div className="chart-card">
      <h3>Issue Resolution Time (Days)</h3>
      {timeAnalytics.resolutionTimes.length > 0 ? (
        <ResponsiveContainer width="100%" height={300}>
          <BarChart 
            data={timeAnalytics.resolutionTimes} 
            margin={{ top: 20, right: 30, left: 20, bottom: 70 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="id" 
              angle={-45} 
              textAnchor="end" 
              height={70} 
              interval={0}
            />
            <YAxis label={{ value: 'Days', angle: -90, position: 'insideLeft' }} />
            <Tooltip content={<CustomResolutionTooltip />} />
            <Bar dataKey="days" fill="#8884d8" name="Days to Resolve" />
          </BarChart>
        </ResponsiveContainer>
      ) : (
        <p className="no-data">No resolution data available</p>
      )}
    </div>

    {/* Stage Duration Analysis */}
    <div className="chart-card">
      <h3>Processing Stage Duration</h3>
      {timeAnalytics.stageData.length > 0 ? (
        <ResponsiveContainer width="100%" height={300}>
          <BarChart 
            data={timeAnalytics.stageData} 
            margin={{ top: 20, right: 30, left: 20, bottom: 70 }}
            stackOffset="expand"
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="id" 
              angle={-45} 
              textAnchor="end" 
              height={70} 
              interval={0}
            />
            <YAxis />
            <Tooltip content={<CustomStageTooltip />} />
            <Legend />
            <Bar 
              dataKey="reportedStage" 
              stackId="a" 
              fill="#ffc658" 
              name="Time in Reported Stage" 
            />
            <Bar 
              dataKey="inProgressStage" 
              stackId="a" 
              fill="#82ca9d" 
              name="Time in Progress Stage" 
            />
          </BarChart>
        </ResponsiveContainer>
      ) : (
        <p className="no-data">No stage duration data available</p>
      )}
    </div>

    {/* Average Resolution Time by Category */}
    <div className="chart-card">
      <h3>Avg. Resolution Time by Issue Type</h3>
      {timeAnalytics.resolutionByTitle.length > 0 ? (
        <ResponsiveContainer width="100%" height={300}>
          <BarChart 
            data={timeAnalytics.resolutionByTitle}
            margin={{ top: 20, right: 30, left: 20, bottom: 70 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="title" 
              angle={-45} 
              textAnchor="end" 
              height={70} 
              interval={0}
            />
            <YAxis label={{ value: 'Days (Avg)', angle: -90, position: 'insideLeft' }} />
            <Tooltip />
            <Bar 
              dataKey="avgDays" 
              fill="#4682B4" 
              name="Average Days to Resolve" 
            />
          </BarChart>
        </ResponsiveContainer>
      ) : (
        <p className="no-data">No category data available</p>
      )}
    </div>

   
  </div>
</div>
</div>
</div>
        
        <div className="b">
        <div className="filters">
        <div className="filter-group">
      <label htmlFor="statusFilter">Status:</label>
      <select
        id="statusFilter"
        value={statusFilter}
        onChange={(e) => {
          setStatusFilter(e.target.value);
          setCurrentPage(1); // Reset to first page when changing filter
        }}
      >
        {allStatuses.map((status) => (
          <option key={status} value={status}>
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </option>
        ))}
      </select>
    </div>
    <div className="filter-row" style={{ marginLeft: "50px" }}>
    <label htmlFor="statusFilter">Search :</label>

    <div className="search-container">
    <div className="search-field">
  <div className="search-icon"  >
        <Search size={18} />
        </div>
    <input 
      type="text" 
      placeholder="Search issues by location ..." 
      value={searchQuery}
      onChange={(e) => {
        setSearchQuery(e.target.value);
        setCurrentPage(1); // Reset to first page when searching
      }}
      className="search-input"
    />
  </div>
  </div>

    
  </div>
</div>
          <div className="titles-section">{/* Titles Section (unchanged) */}</div>
          <div id="complaintsContainer" className="complaints-container">
  <h2>Complaint Details</h2>
  {currentItems.length > 0 ? (
    [...currentItems]
      .sort((a, b) => (a.flags || 0) - (b.flags || 0))
      .map((complaint) => {
        const progressLog = progressLogs[complaint._id];
        const isExpanded = expandedComplaints[complaint._id];

        return (
          <div key={complaint._id} className="complaint-card" style={{ display: 'flex', flexDirection: 'row' }}>
                <div style={{ flex: 1 }}>
                  <h3>{complaint.title}</h3>
                  <p>{complaint.description}</p>
                  <p><strong>Location:</strong> {complaint.location}</p>
                  <p className="complaint-status">
                    <strong>Status:</strong> {complaint.status.charAt(0).toUpperCase() + complaint.status.slice(1)}
                  </p>
                  <label htmlFor={`status-select-${complaint._id}`} className="status-label">
                    Change Status:
                  </label>
                  <select
                    id={`status-select-${complaint._id}`}
                    value={complaint.status}
                    onChange={(e) => changeStatus(complaint._id, e.target.value)}
                    className="status-dropdown"
                  >
                    {allStatuses.filter((s) => s !== "all").map((status) => (
                      <option key={status} value={status}>
                        {status.charAt(0).toUpperCase() + status.slice(1)}
                      </option>
                    ))}
                  </select>
                  <div></div>
                  <button 
                    onClick={() => toggleComplaintDetails(complaint._id)}
                    className="show-details-btn"
                  >
                    {isExpanded ? 'Hide Details' : 'Show Details'}
                  </button>

    {isExpanded && (
      <div className="complaint-details-expanded">
        {/* Show appropriate details based on status */}
        {progressLog && (
          <div className="progress-details">
            <p><strong>Reported Date:</strong> {new Date(progressLog.reportedDate).toLocaleString()}</p>
            
            {progressLog.status === "in progress" && (
              <>
                <p><strong>In Progress Date:</strong> {new Date(progressLog.inProgressDate).toLocaleString()}</p>
                <p><strong>Progress Description:</strong> {progressLog.inProgressDescription}</p>
                <p><strong>officerName:</strong> {progressLog.officerName}</p>
              </>
            )}

            {progressLog.status === "resolved" && (
              <>
                <p><strong>In Progress Date:</strong> {new Date(progressLog.inProgressDate).toLocaleString()}</p>
                <p><strong>Progress Description:</strong> {progressLog.inProgressDescription}</p>
                <p><strong>officerName:</strong> {progressLog.officerName}</p>
                <p><strong>Resolved Date:</strong> {new Date(progressLog.resolvedDate).toLocaleString()}</p>
                <p><strong>Resolution Details:</strong> {progressLog.resolvedDescription}</p>
              </>
            )}
          </div>
        )}
        {complaint.flags > 1 && (
          <p style={{ 
            backgroundColor: 'white', 
            color: 'red', 
            padding: '5px 10px', 
            borderRadius: '4px', 
            marginTop: '8px',
          }}>
            <strong>Warning:</strong> Complaint flagged by {complaint.flags} {complaint.flags === 1 ? 'person' : 'people'}.
          </p>
        )}

        {/* New: Show Flagged Reasons for Authorities */}
        {role === 'government' && complaint.flaggedReasons?.length > 0 && (
          <div style={{ backgroundColor: '#fff3f3', padding: '10px', borderRadius: '5px', marginTop: '10px' }}>
            <strong>🚨 Flagged Reasons:</strong>
            <ul>
              {complaint.flaggedReasons.map((entry, index) => (
                <li key={index} style={{ fontSize: '0.9em', color: '#ff4d4d' }}>
                  <strong>{entry.user}</strong>: {entry.reason} 
                  {entry.flaggedAt ? <em> ({new Date(entry.flaggedAt).toLocaleString()})</em> : null}
                </li>
              ))}
            </ul>
          </div>
          
        )}
      </div>
      
    )}
    
    <button 
      onClick={() => generateDetailedIssuePDF(complaint)}
      className="download-report-btn"
    >
      Download Detailed Report
    </button>
  </div>
  
  {/* Move the images outside the first div but still within the card */}
  {complaint.images?.length > 0 && (
    <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '20px' }}>
      {complaint.images.map((img, index) => {
        const base64Image = bufferToBase64(img.data.data);
        const imgSrc = `data:${img.contentType};base64,${base64Image}`;

        return (
          <img
            key={index}
            src={imgSrc}
            alt={`Issue ${index + 1}`}
            style={{ 
              width: '150px', 
              height: '150px', 
              objectFit: 'cover', 
              marginBottom: '10px',
              cursor: 'pointer',
              border: '1px solid #ddd',
              borderRadius: '4px'
            }}
            onClick={() => openModal(imgSrc)} 
          />
        );
      })}
    </div>
  )}

</div>
              );
            })
        ) : (
          <p>No complaints found for the selected title.</p>
        )}
        {filteredComplaints.length > 0 && (
    <Pagination />
  )}
      </div>
      
        </div>
      </div>
    </section>
      {/* Modal for "In Progress" or "Resolved" status change */}
      {modalData && (
  <div className="modal-overlay">
    <div className="modal-container">
      <div className="modal-header">
        <h2>{modalData.type === 'inProgress' ? 'Update Issue to In Progress' : 'Resolve Issue'}</h2>
        <button 
          className="modal-close-btn" 
          onClick={() => {
            setModalData(null);
            setInProgressDescription('');
            setResolvedDescription('');
            setEstimatedCompletion('');
          }}
        >
          ×
        </button>
      </div>

      <div className="modal-content">
        <div className="modal-detail">
          <p><strong>Issue Title:</strong> {modalData.title}</p>
          <p><strong>Issue ID:</strong> {modalData.issueId}</p>
          <p><strong>Reported Date:</strong> {new Date(modalData.reportedDate).toLocaleString()}</p>
          <p><strong>Authority Name:</strong> {modalData.authorityName}</p>
        </div>

        {modalData.type === 'inProgress' ? (
          <div className="modal-input-group">
            <p className="modal-detail">
              <strong>In Progress Date:</strong> {new Date(modalData.inProgressDate).toLocaleString()}
            </p>
            <label>
              Estimated Completion Date:
              <input
                type="date"
                value={estimatedCompletion}
                onChange={(e) => setEstimatedCompletion(e.target.value)}
                required
              />
            </label>
            <label>
            officerName:
              <textarea
      value={text}
      onChange={(e) => setText(e.target.value)}
                required
                rows="4"
              />
            </label>
            <label>
              In Progress Description:
              <textarea
                value={inProgressDescription}
                onChange={(e) => setInProgressDescription(e.target.value)}
                placeholder="Enter a brief description for in-progress status"
                required
                rows="4"
              />
            </label>
          </div>
        ) : (
          <div className="modal-input-group">
            <p className="modal-detail">
              <strong>In Progress Date:</strong> {new Date(modalData.inProgressDate).toLocaleString()}
              <br />
              <strong>Resolved Date:</strong> {new Date(modalData.resolvedDate).toLocaleString()}
            </p>
            <label>
              Resolved Description:
              <textarea
                value={resolvedDescription}
                onChange={(e) => setResolvedDescription(e.target.value)}
                placeholder="Enter a brief description for resolved status"
                required
                rows="4"
              />
            </label>
          </div>
        )}

        <div className="modal-actions">
          <button 
            className="modal-btn modal-btn-cancel"
            onClick={() => {
              setModalData(null);
              setInProgressDescription('');
              setResolvedDescription('');
              setEstimatedCompletion('');
            }}
          >
            Cancel
          </button>
          <button 
            className="modal-btn modal-btn-submit"
            onClick={handleModalSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  </div>
)}

      {modalImage && (
        <div className="modal"  style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'rgba(0,0,0,0.8)',
          padding: '20px',
          borderRadius: '10px',
          zIndex: 1001,
        }}>
          <img src={modalImage} alt="Complaint" style={{ maxWidth: '100%', maxHeight: '80vh' }} />
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
      </button>        </div>
      )}
      <footer>
        <p>© 2025 CivicConnect. All Rights Reserved.</p>
      </footer>
    </>
  );
}