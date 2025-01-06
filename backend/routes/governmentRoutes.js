const express = require('express');
const router = express.Router();
const governmentController = require('../controllers/governmentController');
const { authenticateGovernmentAuthority } = require('../middleware/authMiddleware'); // Import the correct middleware

// Route to fetch reported issues for government authorities
router.get('/reported-issues', authenticateGovernmentAuthority, governmentController.getReportedIssues);
router.get('/get', governmentController.getAllGovernmentAuthorities);


module.exports = router;
