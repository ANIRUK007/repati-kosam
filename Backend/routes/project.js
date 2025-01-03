const express = require('express');
const { createProject } = require('../controllers/projectController');
const auth = require('../middleware/auth');

const router = express.Router();

router.post('/', auth, createProject);

module.exports = router;
