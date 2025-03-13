const express = require('express');
const multer = require('multer');
const path = require('path');
const Issue = require('../models/Issue'); // Import your Issue model

const router = express.Router();

// Set up storage engine
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Store images in the uploads folder
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // Unique file name
  },
});

const upload = multer({ storage });

// API to report an issue with images
router.post('/report', upload.array('images', 5), async (req, res) => {
  try {
    const { title, description, location, reportedBy, governmentAuthority } = req.body;

    // Extract file paths
    const imagePaths = req.files.map(file => `/uploads/${file.filename}`);

    const newIssue = new Issue({
      title,
      description,
      location,
      reportedBy,
      governmentAuthority,
      images: imagePaths, // Store image paths in the database
    });

    await newIssue.save();
    res.status(201).json({ message: 'Issue reported successfully', issue: newIssue });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
