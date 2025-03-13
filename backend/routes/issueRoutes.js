const express = require('express');
const issueController = require('../controllers/issueController');
const { reportIssue , getIssuesByLoggedInUser , getIssuesByLoggedInGovernmentAuthority, modifyIssue , getAllIssues , deleteIssue, editIssue} = issueController;
const { authenticateUser , authenticateGovernmentAuthority } = require('../middleware/authMiddleware');
const multer = require('multer');
const router = express.Router();



// Set up multer for file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/' ); // Store images in the uploads folder
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname); // Unique file name
    },
  });
  
  const upload = multer({ storage });

  // Report issue with image upload
router.post('/report', upload.array('images', 5), authenticateUser ,reportIssue);

router.get('/user', authenticateUser, getIssuesByLoggedInUser);
router.get('/reported-issues', authenticateGovernmentAuthority, getIssuesByLoggedInGovernmentAuthority);
router.get('/get', getAllIssues);
router.put('/modify/:id' ,authenticateGovernmentAuthority, modifyIssue);

// Route for upvoting an issue
router.put('/trending/:id/upvote',  authenticateUser,issueController.upvoteIssue);
router.delete('/delete/:id', authenticateUser, issueController.deleteIssue);
router.put('/edit/:id', authenticateUser, editIssue);


module.exports = router;
