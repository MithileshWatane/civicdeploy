const Project = require('../models/Project');

exports.submitProject = async (req, res) => {
  const { name, goalAmount, description } = req.body;
  const userId = req.user.id; // Assumes `req.user` is set by authentication middleware

  try {
    const newProject = new Project({
      name,
      goalAmount,
      description,
      createdBy: userId, // Add the creator's ID
    });

    await newProject.save();
    res.status(201).json(newProject);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Fetch all projects
exports.getProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Contribution handler
exports.contributeToProject = async (req, res) => {
  const { projectId } = req.params;
  const { amount } = req.body;
  const userId = req.user.id; // Assuming you have middleware to attach the authenticated user's ID to req.user

  try {
    const project = await Project.findById(projectId);
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }

    // Update the project's current funding
    project.funding += parseFloat(amount);

    // Add userId to the contributedBy array if not already added
    if (!project.contributedBy.includes(userId)) {
      project.contributedBy.push(userId);
    }

    await project.save();

    res.status(200).json({ message: 'Contribution successful', project });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
// Edit Project
exports.editProject = async (req, res) => {
  const { projectId } = req.params;
  const { name, goalAmount, description } = req.body;
  const userId = req.user.id; // Assuming `req.user` is set by authentication middleware

  try {
    const project = await Project.findById(projectId);
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }

    // Check if the user is the creator of the project
    if (project.createdBy.toString() !== userId) {
      return res.status(403).json({ message: 'You are not authorized to edit this project' });
    }

    // Update project details
    project.name = name || project.name;
    project.goalAmount = goalAmount || project.goalAmount;
    project.description = description || project.description;

    await project.save();

    res.status(200).json({ message: 'Project updated successfully', project });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
// Delete Project
exports.deleteProject = async (req, res) => {
  const { projectId } = req.params;
  const userId = req.user.id; // Assuming `req.user` is set by authentication middleware

  try {
    
      const deletedProject = await Project.findByIdAndDelete(projectId);
     

    if (!deletedProject) {
      return res.status(404).json({ message: "Project not found" });
    }



    res.status(200).json({ message: 'Project deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
