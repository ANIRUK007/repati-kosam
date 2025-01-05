const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        description: { type: String },
        version: { type: String, default: '1.0' },
        files: [
            {
                filename: { type: String, required: true },
                filePath: { type: String, required: true },
                fileType: { type: String },
                fileSize: { type: Number }, // Size in bytes
            },
        ],
    },
    { timestamps: true }
);

module.exports = mongoose.model('Project', projectSchema);
