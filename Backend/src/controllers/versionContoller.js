const Project = require('../models/Project');
const File = require('../models/File');

// Upload a new draft version
exports.uploadDraft = async (req, res) => {
    const { projectId } = req.body;
    const file = req.file;

    try {
        const project = await Project.findById(projectId);
        if (!project) return res.status(404).json({ error: 'Project not found' });

        const newDraft = new File({
            filename: file.originalname,
            filePath: file.path,
            project: projectId,
            version: project.drafts.length + 1, // Increment version
        });

        await newDraft.save();
        project.drafts.push(newDraft._id);
        await project.save();

        res.status(201).json({ message: 'Draft uploaded successfully', draft: newDraft });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Resolve merge conflict
exports.resolveConflict = async (req, res) => {
    const { projectId, draftA, draftB, selectedDraft } = req.body;

    try {
        const project = await Project.findById(projectId);
        if (!project) return res.status(404).json({ error: 'Project not found' });

        if (project.mergeStrategy === 'manual') {
            project.drafts = project.drafts.filter((draft) => draft !== draftA && draft !== draftB);
            project.finalVersion = selectedDraft; // Set the selected draft as the final version
        } else if (project.mergeStrategy === 'priority') {
            const priorityA = req.body.priority[draftA];
            const priorityB = req.body.priority[draftB];
            const winner = priorityA >= priorityB ? draftA : draftB;

            project.drafts = project.drafts.filter((draft) => draft !== draftA && draft !== draftB);
            project.finalVersion = winner; // Automatically select based on priority
        }

        await project.save();
        res.status(200).json({ message: 'Conflict resolved successfully', project });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Fetch all drafts and final version for a project
exports.getVersions = async (req, res) => {
    const { projectId } = req.params;
    const userId = req.header('User-ID'); // Assuming User-ID is passed in the request header

    try {
        const project = await Project.findById(projectId).populate({
            path: 'drafts',
            match: { uploadedBy: userId }, // Filter drafts by the logged-in user
        }).populate('finalVersion');

        if (!project) return res.status(404).json({ error: 'Project not found' });

        res.status(200).json({
            drafts: project.drafts, // Drafts uploaded by the user
            finalVersion: project.finalVersion, // Finalized draft
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};



