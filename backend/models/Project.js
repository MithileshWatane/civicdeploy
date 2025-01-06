const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  goalAmount: { type: Number, required: true },
  description: { type: String, required: true },
  funding: { type: Number, default: 0 },
  contributedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }], // Array to store user IDs
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // User who created the project

  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Project', projectSchema);
