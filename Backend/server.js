const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();  // Load environment variables from .env

const app = express();

// Middleware
app.use(express.json());   // Parse incoming JSON requests
app.use(cors());           // Enable CORS for frontend-backend communication

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB connected');
}).catch((err) => {
  console.error('MongoDB connection error:', err);
});

// Routes
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

// Server listening on port
const PORT = process.env.PORT || 5001; // Default port is 5001 or use from .env
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});