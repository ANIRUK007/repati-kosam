const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth'); // Authentication routes
const projectRoutes = require('./routes/project'); // Project routes
const userRoutes = require('./models/user'); // User-related routes (if applicable)

dotenv.config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors()); // Enable CORS for cross-origin requests
app.use(express.json()); // Parse JSON request bodies
app.use('/uploads', express.static('uploads')); // Serve static files from the "uploads" folder

// Database Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1); // Exit the application if the database connection fails
  });

// Routes
app.use('/auth', authRoutes); // Authentication routes (register, login, role update)
app.use('/projects', projectRoutes); // Project management routes (create, edit, delete projects)
app.use('/users', userRoutes); // Additional user-related routes (profile, list users, etc.)

// Default Route
app.get('/', (req, res) => {
  res.send('Welcome to the API!');
});

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack); // Log the error stack
  res.status(err.status || 500).json({ error: err.message || 'Internal Server Error' });
});

// Start the Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
