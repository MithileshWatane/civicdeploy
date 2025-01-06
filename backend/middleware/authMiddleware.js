const jwt = require('jsonwebtoken');
const User = require('../models/User'); // Adjust path as needed
const GovernmentAuthority = require('../models/GovernmentAuthority'); // Assuming a model for government authority

exports.authenticateUser = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1]; // Extract Bearer token

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized: No token provided' });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Find the user from the token's payload
    const user = await User.findById(decoded.id).select('-password'); // Exclude password
    if (!user) {
      return res.status(401).json({ message: 'Unauthorized: User not found' });
    }

    // Attach user information to the request object
    req.user = user;

    next(); // Proceed to the next middleware or route handler
  } catch (error) {
    console.error('Authentication error:', error);
    return res.status(401).json({ message: 'Unauthorized: Invalid token' });
  }
};


exports.authenticateGovernmentAuthority = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1]; // Extract Bearer token

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized: No token provided' });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Find the government authority from the token's payload
    const governmentAuthority = await GovernmentAuthority.findById(decoded.id).select('-password'); // Exclude password
    if (!governmentAuthority) {
      return res.status(401).json({ message: 'Unauthorized: Government authority not found' });
    }

    // Attach government authority information to the request object
    req.user = governmentAuthority;

    next(); // Proceed to the next middleware or route handler
  } catch (error) {
    console.error('Authentication error:', error);
    return res.status(401).json({ message: 'Unauthorized: Invalid token' });
  }
};
