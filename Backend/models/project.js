const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  moderator: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  editors: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  viewers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  rawFiles: [String], // Paths to uploaded raw files
  drafts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Version' }],
  finalizedVersion: { type: mongoose.Schema.Types.ObjectId, ref: 'Version' },
});

module.exports = mongoose.model('Project', projectSchema);
