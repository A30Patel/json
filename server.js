const express = require('express');
const path = require('path');
const jsonServer = require('json-server');

const app = express();
const port = process.env.PORT || 3000;

// Serve React build files
app.use(express.static(path.join(__dirname, 'build')));

// Serve JSON server API
app.use('/api', jsonServer.router('db.json'));

// Handle React routing, return all requests to React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
