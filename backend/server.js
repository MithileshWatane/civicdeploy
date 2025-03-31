const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const connectDB = require('./config/db');
const multer = require("multer");
const fs = require("fs");
const axios = require("axios");
const ProgressLog = require('./models/ProgressLog');
const mongoose = require('mongoose');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();
const upload = multer({ dest: "uploads/" });

// Middleware
app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({limit: '100mb', extended: true }));

// Import routes
const registerRoutes = require('./routes/registerRoutes');
const governmentRoutes = require('./routes/governmentRoutes');
const issueRoutes = require('./routes/issueRoutes');
const communityRoutes = require('./routes/communityRoutes');
const loginRoutes = require('./routes/loginRoutes');
const userRoutes = require('./routes/userRoutes');



app.post("/api/get-progress-log", async (req, res) => {
  try {
    const { issueIds } = req.body;
    if (!issueIds || issueIds.length === 0) {
      return res.json([]);
    }

    const progressLogs = await ProgressLog.find({ issueId: { $in: issueIds } });
    res.json(progressLogs);
  } catch (error) {
    console.error("Error fetching progress logs:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});


app.post('/api/issues/progress-log', async (req, res) => {
  try {
    const {
      issueId,
      title,
      authorityName,
      officerName,
      reportedDate,
      inProgressDate,
      estimatedCompletion,
      status,
      inProgressDescription,
      resolvedDescription
    } = req.body;

    // Validate required fields
    if (!issueId || !title || !authorityName || !reportedDate) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // Check if a progress log for this issueId already exists
    let progressLog = await ProgressLog.findOne({ issueId });

    // If it exists, update the record
    if (progressLog) {
      progressLog.title = title;
      progressLog.authorityName = authorityName;
      progressLog.officerName = officerName || progressLog.officerName;
      progressLog.inProgressDate = inProgressDate || progressLog.inProgressDate;
      progressLog.estimatedCompletion = estimatedCompletion || progressLog.estimatedCompletion;
      progressLog.inProgressDescription = inProgressDescription || progressLog.inProgressDescription;
      progressLog.status = status;

      if (status === 'resolved') {
        if (!resolvedDescription) {
          return res.status(400).json({ message: 'Resolved description is required when status is resolved' });
        }
        progressLog.resolvedDescription = resolvedDescription;
        progressLog.resolvedDate = new Date();
      }

      await progressLog.save();
      return res.status(200).json({ message: 'Progress log updated', progressLog });
    }

    // If not, create a new progress log entry
    const newProgressLog = new ProgressLog({
      issueId,
      title,
      authorityName,
      officerName,
      reportedDate,
      inProgressDate,
      estimatedCompletion,
      inProgressDescription,
      resolvedDescription,
      resolvedDate: status === 'resolved' ? new Date() : undefined,
      status
    });

    await newProgressLog.save();
    res.status(201).json({ message: 'Progress log created', newProgressLog });

  } catch (error) {
    console.error('Error saving/updating progress log:', error);
    res.status(500).json({ message: 'Error saving/updating progress log', error });
  }
});




// In your Express.js routes file
app.get('/api/issues/progress-log/:issueId', async (req, res) => {
  try {
    const issueId = req.params.issueId;
    
    // Find the most recent progress log entry for this issue
    const progressLog = await ProgressLog.findOne({ 
      issueId: issueId, 
      status: 'in progress' 
    }).sort({ inProgressDate: -1 });

    if (!progressLog) {
      return res.status(404).json({ message: 'No progress log found' });
    }

    res.json({
      inProgressDate: progressLog.inProgressDate,
      // Include other relevant details if needed
    });
  } catch (error) {
    console.error('Error fetching progress log:', error);
    res.status(500).json({ message: 'Server error while fetching progress log' });
  }
});

// Route handling
app.use('/api/register', registerRoutes);
app.use('/api/auth', loginRoutes);
app.use('/api/government', governmentRoutes);
app.use('/api/governmentid', issueRoutes); // Consider renaming for clarity if needed
app.use('/api/government-authorities', governmentRoutes);
app.use('/api/issues', issueRoutes);
app.use('/api/users', userRoutes);
app.use('/api/community', communityRoutes);

// Serve static files (uploads)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// 404 Handler
app.use((req, res, next) => {
  res.status(404).json({ message: 'Route not found' });
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error('Server Error:', err);
  res.status(500).json({ message: 'Internal Server Error', error: err.message });
});







app.post("/api/transcribe-and-translate", upload.single("audio"), async (req, res) => {
  try {
    const audioFilePath = req.file.path;
    const audioData = fs.readFileSync(audioFilePath);

    // Step 1: Convert Speech to Text (Detect Any Language)
    const speechResponse = await axios.post(
      `https://${process.env.AZURE_REGION}.stt.speech.microsoft.com/speech/recognition/conversation/cognitiveservices/v1`,
      audioData,
      {
        headers: {
          "Ocp-Apim-Subscription-Key": process.env.AZURE_SPEECH_KEY,
          "Content-Type": "audio/wav",
        },
      }
    );

    fs.unlinkSync(audioFilePath); // Delete uploaded file
    const transcribedText = speechResponse.data.DisplayText;

    // Step 2: Translate to English
    const translationResponse = await axios.post(
      `https://api.cognitive.microsofttranslator.com/translate?api-version=3.0&to=en`,
      [{ text: transcribedText }],
      {
        headers: {
          "Ocp-Apim-Subscription-Key": process.env.AZURE_TRANSLATOR_KEY,
          "Content-Type": "application/json",
        },
      }
    );

    const translatedText = translationResponse.data[0].translations[0].text;

    res.json({ translatedText });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Transcription or translation failed" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
