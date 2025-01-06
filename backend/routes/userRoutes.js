const express = require('express');
const router = express.Router();
const { getLoggedInUser , getUserById } = require('../controllers/userController');
const { authenticateUser } = require('../middleware/authMiddleware');

// Route to get the logged-in user's information
router.get('/me', authenticateUser, getLoggedInUser);
router.get('/:id', getUserById); // API to get user details by ID


module.exports = router;
