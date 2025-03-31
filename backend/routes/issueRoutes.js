const express = require('express');
const issueController = require('../controllers/issueController');
const { 
  reportIssue, 
  getIssuesByLoggedInUser, 
  getIssuesByLoggedInGovernmentAuthority, 
  modifyIssue, 
  getAllIssues, 
  deleteIssue, 
  editIssue 
} = issueController;

const { authenticateUser, authenticateGovernmentAuthority } = require('../middleware/authMiddleware');
const multer = require('multer');
const router = express.Router();

// Store images in memory for direct MongoDB storage
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Report issue with image upload (stored in MongoDB)
router.post('/report', upload.array('images', 5), authenticateUser, reportIssue);

router.get('/user', authenticateUser, getIssuesByLoggedInUser);
router.put('/flag/:id', authenticateUser, issueController.flagIssue);
router.get('/reported-issues', authenticateGovernmentAuthority, getIssuesByLoggedInGovernmentAuthority);
router.get('/get', getAllIssues);
router.put('/modify/:id', authenticateGovernmentAuthority, modifyIssue);

// Upvote an issue
router.put('/trending/:id/upvote', authenticateUser, issueController.upvoteIssue);

// Delete an issue
router.delete('/delete/:id', authenticateUser, deleteIssue);

// Edit an issue
router.put('/edit/:id', authenticateUser, editIssue);

module.exports = router;