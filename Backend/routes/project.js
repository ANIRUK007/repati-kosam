const express = require('express');
const multer = require('multer');
const Project = require('../models/Project');
const Version = require('../models/Version');
const authorize = require('../middleware/authorize');
const router = express.Router();

// Multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`),
});
const upload = multer({ storage });

// Fetch user's projects
router.get('/', authorize(['Editor', 'Viewer', 'Moderator']), async (req, res) => {
  const user = await Project.find({ 
    $or: [
      { moderator: req.user.id },
      { editors: req.user.id },
      { viewers: req.user.id },
    ],
  });

  res.status(200).send({ projects: user });
});

// Create a project
router.post('/create', authorize(['Moderator']), async (req, res) => {
  const { title, description, moderatorId, editors, viewers } = req.body;

  const project = new Project({
    title,
    description,
    moderator: moderatorId,
    editors,
    viewers,
  });

  await project.save();
  res.status(201).send({ message: 'Project created successfully', project });
});

// Upload raw files
router.post('/:id/upload', authorize(['Moderator']), upload.array('files'), async (req, res) => {
  const project = await Project.findById(req.params.id);
  if (!project) return res.status(404).send({ error: 'Project not found' });

  req.files.forEach(file => project.rawFiles.push(file.path));
  await project.save();

  res.status(200).send({ message: 'Files uploaded successfully', files: req.files });
});

module.exports = router;
