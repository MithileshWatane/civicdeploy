const GovernmentAuthority = require('../models/GovernmentAuthority');
const Issue = require('../models/Issue');
const bcrypt = require('bcrypt');

// Get all government authorities
exports.getAllGovernmentAuthorities = async (req, res) => {
  try {
    const authorities = await GovernmentAuthority.find().select('name department email location');
    res.status(200).json(authorities);
  } catch (error) {
    console.error('Error fetching government authorities:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// New method to get reported issues
exports.getReportedIssues = async (req, res) => {
  try {
    const issues = await Issue.find(); // Fetch all reported issues
    res.status(200).json(issues);
  } catch (error) {
    console.error('Error fetching reported issues:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

exports.getGovernmentAuthorityById = async (req, res) => {
  try {
    const { id } = req.params;
    const authority = await GovernmentAuthority.findById(id).select('name department email location');

    if (!authority) {
      return res.status(404).json({ message: 'Government authority not found' });
    }

    res.status(200).json(authority);
  } catch (error) {
    console.error('Error fetching government authority:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
