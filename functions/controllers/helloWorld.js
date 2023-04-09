const express = require('express');
const router = express.Router();

// Define a route for the root URL
router.get('/', (req, res) => {
  res.send('Hello World!');
});

// Define a route for /about
router.get('/about', (req, res) => {
  res.send('About Us');
});

// Export the router
module.exports = router;
