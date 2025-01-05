const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        id: {type: String, required: true, unique: true},
        email: { type: String, required: true, unique: true },
        name: { type: String, required: true },
        role: { type: String, enum: ['admin', 'editor', 'viewer'], default: 'viewer' },
    },
    { timestamps: true } // Automatically handles `createdAt` and `updatedAt`
);

module.exports = mongoose.model('User', userSchema);
