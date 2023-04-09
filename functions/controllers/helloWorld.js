const express = require('express');
const { login, register } = require('./auth');
const { hello } = require('./users');
const router = express.Router();

// Define a route for the root URL
router.post('/users', login
);
router.post('/register', register)

// Define a route for /about
router.get('/about', (req, res) => {
  res.send('About Us');
});

// Export the router
module.exports = router;
