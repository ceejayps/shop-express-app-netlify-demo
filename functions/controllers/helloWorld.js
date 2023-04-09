const express = require('express');
const { hello } = require('./users/users');
const router = express.Router();

// Define a route for the root URL
router.get('/users', hello
);

// Define a route for /about
router.get('/about', (req, res) => {
  res.send('About Us');
});

// Export the router
module.exports = router;
