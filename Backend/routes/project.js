const express = require('express');
const multer = require('multer');
const Project = require('../models/Project');
const authorize = require('../middleware/authorize');
const router = express.Router();

// Multer Configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, 'uploads/'),
    filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`),
});
const upload = multer({
    storage,
    limits: { fileSize: 50 * 1024 * 1024 }, // 50MB limit
});

// Fetch User's Projects
router.get('/', authorize(['Editor', 'Viewer', 'Moderator']), async (req, res) => {
    try {
        const projects = await Project.find({
            $or: [
                { moderator: req.user.id },
                { editors: req.user.id },
                { viewers: req.user.id },
            ],
        });
        res.status(200).send({ projects });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Failed to fetch projects.' });
    }
});

// Create a Project
router.post('/create', authorize(['Moderator']), async (req, res) => {
    try {
        const { title, description, editors, viewers } = req.body;

        if (!title) {
            return res.status(400).send({ error: 'Project title is required.' });
        }

        const project = new Project({
            title,
            description,
            moderator: req.user.id,
            editors: editors || [],
            viewers: viewers || [],
        });

        await project.save();
        res.status(201).send({ message: 'Project created successfully', project });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Failed to create project.' });
    }
});

// Upload Raw Files
router.post('/:id/upload', authorize(['Moderator']), upload.array('files'), async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);
        if (!project) {
            return res.status(404).send({ error: 'Project not found.' });
        }

        req.files.forEach(file => project.rawFiles.push(file.path));
        await project.save();

        res.status(200).send({ message: 'Files uploaded successfully', files: req.files });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Failed to upload files.' });
    }
});

module.exports = router;
