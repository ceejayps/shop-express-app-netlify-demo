const express = require('express');
const { login } = require('./auth');
const { hello } = require('./users');
const router = express.Router();

// Define a route for the root URL
router.post('/users', login
);

// Define a route for /about
router.get('/about', (req, res) => {
  res.send('About Us');
});

// Export the router
module.exports = router;
