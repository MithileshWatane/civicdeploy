const express = require('express');
const { createUser, createGovernmentAccount , updateUser } = require('../controllers/registerController');
const router = express.Router();
const { authenticateUser } = require('../middleware/authMiddleware');
// Register as a citizen
router.post('/citizen', createUser);

// Register as a government authority
router.post('/government', createGovernmentAccount);
router.put('/update', authenticateUser, updateUser);
  
  module.exports = router;