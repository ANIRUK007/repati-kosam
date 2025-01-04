const mongoose = require('mongoose');

const versionSchema = new mongoose.Schema({
  project: { type: mongoose.Schema.Types.ObjectId, ref: 'Project', required: true },
  editor: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  file: { type: String, required: true }, // Path to uploaded draft file
  timestamp: { type: Date, default: Date.now },
  isFinalized: { type: Boolean, default: false },
});

module.exports = mongoose.model('Version', versionSchema);
