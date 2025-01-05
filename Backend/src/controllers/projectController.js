const Project = require('../models/Project');
const fs = require('fs');

exports.createProject = async (req, res) => {
    const { name, description, version } = req.body;
    const files = req.files;

    try {
        const fileData = files.map((file) => ({
            filename: file.originalname,
            filePath: file.path,
            fileType: file.mimetype,
            fileSize: file.size,
        }));

        const newProject = new Project({
            name,
            description,
            version, // Add logic to extract user ID from request
            files: fileData,
        });

        await newProject.save();
        res.status(201).json(newProject);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getProjects = async (req, res) => {
    try {
        const projects = await Project.findById(req.params.id);
        res.status(200).json(projects);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateProject = async (req, res) => {
    const { id } = req.params;
    const updates = req.body;
    const files = req.files;

    try {
        const fileData = files.map((file) => ({
            filename: file.originalname,
            filePath: file.path,
            fileType: file.mimetype,
            fileSize: file.size,
        }));

        const updatedProject = await Project.findByIdAndUpdate(
            id,
            {
                ...updates,
                $push: { files: { $each: fileData } },
            },
            { new: true }
        );

        if (!updatedProject) return res.status(404).json({ error: 'Project not found' });
        res.status(200).json(updatedProject);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteProject = async (req, res) => {
    const { id } = req.params;

    try {
        const project = await Project.findById(id);

        if (!project) return res.status(404).json({ error: 'Project not found' });

        project.files.forEach((file) => {
            fs.unlink(file.filePath, (err) => {
                if (err) console.error(`Failed to delete file: ${file.filePath}`, err);
            });
        });

        await project.remove();
        res.status(200).json({ message: 'Project deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
