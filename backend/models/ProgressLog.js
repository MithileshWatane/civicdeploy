const mongoose = require('mongoose');

const ProgressLogSchema = new mongoose.Schema({
    issueId: { type: mongoose.Schema.Types.ObjectId, ref: 'Issue', required: true },
    title: { type: String, required: true },
    authorityName: { type: String, required: true },
    officerName: { type: String, required: true },
    reportedDate: { type: Date, required: true },
    inProgressDate: { type: Date },
    resolvedDate: { type: Date },
    estimatedCompletion: { type: Date },
    inProgressDescription: { type: String },
    resolvedDescription: { type: String },
    status: { type: String, enum: ['in progress', 'resolved'], required: true },
  });


module.exports = mongoose.model('ProgressLog', ProgressLogSchema);