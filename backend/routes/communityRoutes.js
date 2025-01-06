const express = require('express');
const router = express.Router();
const communityController = require('../controllers/communityController');
const { authenticateUser } = require('../middleware/authMiddleware');


// Project routes
router.post('/projects',  authenticateUser,communityController.submitProject);
router.get('/projects', communityController.getProjects);
router.post('/projects/:projectId/contribute', authenticateUser, communityController.contributeToProject); // New contribution route
// Route to edit a project (only by the creator)
router.put('/edit/:projectId', authenticateUser, communityController.editProject);

// Route to delete a project (only by the creator)
router.delete('/delete/:projectId', authenticateUser, communityController.deleteProject);

module.exports = router;
