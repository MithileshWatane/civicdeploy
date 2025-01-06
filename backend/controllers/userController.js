const User = require('../models/User'); // Adjust path as needed

// Controller to get logged-in user information
exports.getLoggedInUser = async (req, res) => {
  try {
    // Fetch the logged-in user's data using the ID from the token payload
    const user = await User.findById(req.user._id).select('-password'); // Exclude password

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Send the user data as response
    res.status(200).json({ user });
  } catch (error) {
    console.error('Error fetching logged-in user:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

exports.getUserById = async (req, res) => {
  const { id } = req.params; // Get user ID from request parameters
  try {
    const user = await User.findById(id, 'name email'); // Fetch specific fields
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};