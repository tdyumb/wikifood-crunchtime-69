
// Simple Express server for serving the built app
const express = require('express');
const path = require('path');
const compression = require('compression');
const helmet = require('helmet');

// Create express app
const app = express();
const PORT = process.env.PORT || 3000;

// Security and optimization middleware
app.use(helmet({
  contentSecurityPolicy: false, // Adjust based on your needs
}));
app.use(compression());

// Serve static files from the 'dist' directory
app.use(express.static(path.join(__dirname, 'dist')));

// All routes should serve the index.html file for SPA
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
