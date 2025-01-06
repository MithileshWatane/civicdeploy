const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Import routes
const registerRoutes = require('./routes/registerRoutes');
const governmentRoutes = require('./routes/governmentRoutes');
const issueRoutes = require('./routes/issueRoutes');
const communityRoutes = require('./routes/communityRoutes'); // Community routes
const loginRoutes = require('./routes/loginRoutes');
const userRoutes = require('./routes/userRoutes');

// Use routes
app.use('/api/register', registerRoutes);
app.use('/api/auth', loginRoutes);
app.use('/api/government', governmentRoutes);
app.use('/api/governmentid', issueRoutes);

app.use('/api/government-authorities', governmentRoutes);

app.use('/api/issues', issueRoutes);
app.use('/api/users', userRoutes);
app.use('/api/community', communityRoutes); // Use community routes



// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
