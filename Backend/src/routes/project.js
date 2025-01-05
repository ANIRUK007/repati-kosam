const express = require('express');
const { createProject, getProjects, updateProject, deleteProject } = require('../controllers/projectController');
const upload = require('../middleware/upload'); // Import Multer middleware for file uploads

const router = express.Router();

router.post('/', upload.array('files'), createProject); // Add files while creating a project
router.get('/', getProjects); // Get all projects
router.put('/:id', upload.array('files'), updateProject); // Add files while updating a project
router.delete('/:id', deleteProject); // Delete a project and its files

module.exports = router;
