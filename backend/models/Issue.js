const mongoose = require('mongoose');

const issueSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true }, // Changed location to a simple string
  reportedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  governmentAuthority: { type: mongoose.Schema.Types.ObjectId, ref: 'GovernmentAuthority', required: true },
  status: { type: String, enum: ['reported', 'in progress', 'resolved'], default: 'reported' },
  createdAt: { type: Date, default: Date.now },
  votes: { type: Number, default: 1 } ,// New field to store the number of votes
  upvotedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }], // Array to store user IDs
  
});

module.exports = mongoose.model('Issue', issueSchema);
