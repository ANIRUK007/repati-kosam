const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
    filename: { type: String, required: true },
    filePath: { type: String, required: true },
    project: { type: mongoose.Schema.Types.ObjectId, ref: 'Project', required: true },
    version: { type: Number, default: 1 },
    isDraft: { type: Boolean, default: true }, // Marks whether this is a draft or final version
}, { timestamps: true });

module.exports = mongoose.model('File', fileSchema);
