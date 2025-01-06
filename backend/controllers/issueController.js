const Issue = require('../models/Issue');

exports.reportIssue = async (req, res) => {
  const { title, description, location, governmentAuthority } = req.body;

  try {
    // Ensure req.user is defined
    if (!req.user || !req.user.id) {
      return res.status(401).json({ message: 'Unauthorized: User not authenticated' });
    }

    const issue = new Issue({
      title,
      description,
      location,
      governmentAuthority,
      reportedBy: req.user.id, // Access user ID
    });

    await issue.save();
    res.status(201).json({ message: 'Issue reported successfully', issue });
  } catch (error) {
    console.error('Error reporting issue:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

exports.getIssuesByLoggedInUser = async (req, res) => {
  try {
    // Ensure the user is authenticated and req.user contains the logged-in user's ID
    if (!req.user || !req.user.id) {
      return res.status(401).json({ message: 'Unauthorized: User not authenticated' });
    }

    // Fetch issues reported by the logged-in user
    const issues = await Issue.find({ reportedBy: req.user.id })
      .populate('reportedBy', 'name email') // Optional: Populate user details
      .populate('governmentAuthority', 'name email'); // Optional: Populate government authority details

    if (issues.length === 0) {
      return res.status(404).json({ message: 'No issues found for this user' });
    }

    res.status(200).json({ message: 'Issues fetched successfully', issues });
  } catch (error) {
    console.error('Error fetching issues by logged-in user ID:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

exports.getIssuesByLoggedInGovernmentAuthority = async (req, res) => {
  try {
    // Ensure the government authority is authenticated and req.user contains the logged-in government authority's ID
    if (!req.user || !req.user.id) {
      return res.status(401).json({ message: 'Unauthorized: Government authority not authenticated' });
    }

    // Fetch issues reported to the logged-in government authority
    const issues = await Issue.find({ governmentAuthority: req.user.id }) // Use logged-in government's authority ID
      .populate('reportedBy', 'name email') // Optional: Populate user details
      .populate('governmentAuthority', 'name email department'); // Optional: Populate government authority details

    if (issues.length === 0) {
      return res.status(404).json({ message: 'No issues found for this government authority' });
    }

    res.status(200).json({ message: 'Issues fetched successfully', issues });
  } catch (error) {
    console.error('Error fetching issues by government authority ID:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Get all issues reported to the government authority
exports.getReportedIssues = async (req, res) => {
  const { authorityId } = req.params;

  try {
    // Fetch all issues tagged to the specific government authority
    const issues = await Issue.find({ taggedAuthorities: authorityId });
    res.status(200).json({ message: 'Issues fetched successfully', issues });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

/**
 * Upvote an issue
 */
exports.upvoteIssue = async (req, res) => {
  const { id } = req.params; // Get the issue ID from the URL
  const { title, description, location, governmentAuthority, status, upvote } = req.body; // Get updated data and upvote action from the request body

  try {
    // Ensure req.user is defined
    if (!req.user || !req.user.id) {
      return res.status(401).json({ message: 'Unauthorized: User not authenticated' });
    }

    const userId = req.user.id; // User ID of the authenticated user

    // Check if the request is to modify general issue details or upvote
    if (upvote) {
      // Find the issue by ID
      const issue = await Issue.findById(id);

      if (!issue) {
        return res.status(404).json({ message: 'Issue not found' });
      }

      // Check if the user has already upvoted
      if (issue.upvotedBy.includes(userId)) {
        return res.status(400).json({ message: 'You have already upvoted this issue' });
      }

      // Increment vote count and add the user to the upvotedBy array
      issue.votes += 1;
      issue.upvotedBy.push(userId);
      await issue.save();

      return res.status(200).json({
        message: 'Issue upvoted successfully',
        votes: issue.votes,
      });
    }

    // If not an upvote, modify issue details
    const updatedIssue = await Issue.findByIdAndUpdate(
      id,
      { title, description, location, governmentAuthority, status },
      { new: true, runValidators: true } // Return the updated document and run validators
    );

    if (!updatedIssue) {
      return res.status(404).json({ message: 'Issue not found' });
    }

    res.status(200).json({
      message: 'Issue updated successfully',
      updatedIssue,
    });
  } catch (error) {
    console.error('Error modifying issue:', error);
    res.status(500).json({
      message: 'Server error',
      error: error.message,
    });
  }
};


exports.modifyIssue = async (req, res) => {
  const { id } = req.params; // Get the issue ID from the URL
  const { title, description, location, governmentAuthority, status } = req.body; // Get updated data from the request body

  try {
    // Ensure req.user is defined
    if (!req.user || !req.user.id) {
      return res.status(401).json({ message: 'Unauthorized: User not authenticated' });
    }

    // Find the issue by ID and update it
    const updatedIssue = await Issue.findByIdAndUpdate(
      id,
      { title, description, location, governmentAuthority, status },
      { new: true, runValidators: true } // Return the updated document and run validators
    );

    if (!updatedIssue) {
      return res.status(404).json({ message: 'Issue not found' });
    }

    res.status(200).json({ message: 'Issue updated successfully', updatedIssue });
  } catch (error) {
    console.error('Error updating issue:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Fetch all issues
exports.getAllIssues = async (req, res) => {
  try {
    // Fetch all issues from the database
    const issues = await Issue.find()
      .populate('reportedBy', 'name email') // Optional: Populate user details
      .populate('governmentAuthority', 'name email'); // Optional: Populate government authority details

    if (issues.length === 0) {
      return res.status(404).json({ message: 'No issues found' });
    }

    res.status(200).json({ message: 'Issues fetched successfully', issues });
  } catch (error) {
    console.error('Error fetching all issues:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
exports.deleteIssue = async (req, res) => {
  const { id } = req.params; // Get the issue ID from the URL

  try {
    // Ensure req.user is defined
    if (!req.user || !req.user.id) {
      return res.status(401).json({ message: 'Unauthorized: User not authenticated' });
    }

    // Find and delete the issue
    const deletedIssue = await Issue.findByIdAndDelete(id);

    if (!deletedIssue) {
      return res.status(404).json({ message: 'Issue not found' });
    }

    res.status(200).json({ message: 'Issue deleted successfully' });
  } catch (error) {
    console.error('Error deleting issue:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }};


  exports.editIssue = async (req, res) => {
    const { id } = req.params; // Get the issue ID from the URL
    const { title, description, location, governmentAuthority, status } = req.body; // Data to update the issue
  
    try {
      // Ensure req.user is defined and authenticated
      if (!req.user || !req.user.id) {
        return res.status(401).json({ message: 'Unauthorized: User not authenticated' });
      }
  
      // Fetch the issue to verify ownership or permission
      const issue = await Issue.findById(id);
  
      if (!issue) {
        return res.status(404).json({ message: 'Issue not found' });
      }
  
      // Check if the logged-in user is the reporter or a government authority associated with the issue
      if (
        issue.reportedBy.toString() !== req.user.id &&
        issue.governmentAuthority.toString() !== req.user.id
      ) {
        return res.status(403).json({ message: 'Forbidden: You do not have permission to edit this issue' });
      }
  
      // Update the issue
      const updatedIssue = await Issue.findByIdAndUpdate(
        id,
        { title, description, location, governmentAuthority, status },
        { new: true, runValidators: true } // Return the updated document and run validators
      );
  
      res.status(200).json({
        message: 'Issue updated successfully',
        updatedIssue,
      });
    } catch (error) {
      console.error('Error editing issue:', error);
      res.status(500).json({
        message: 'Server error',
        error: error.message,
      });
    }
  };