const app = require('./app');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const express = require('express');
const app = express();

app.use(express.json()); // Middleware to parse JSON request bodies

// POST endpoint
app.post('/models/user', (req, res) => {
    const { email, password, name, role } = req.body;

    if (!email || !password || !name || !role) {
        return res.status(400).send({ error: 'Missing required fields' });
    }

    res.status(200).send({
        message: 'User data received successfully',
        data: { email, password, name, role },
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
