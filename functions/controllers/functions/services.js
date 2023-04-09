const jwt = require('jsonwebtoken');

exports.isValidEmail =(email)=> {
    // Regular expression for validating email addresses
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  exports.generateJWT = (user) => {
    // Define the payload of the JWT
    const payload = {
      sub: user.id, // user id as the subject
      iat: Math.floor(Date.now() / 1000), // issued at timestamp
      exp: Math.floor(Date.now() / 1000) + (4 * 60 * 60), // expiration timestamp (4 hours from now)
    };
  
    // Generate the JWT using the secret key
    const token = jwt.sign(payload, process.env.JWT_SECRET);
  
    return token;
  }
  
