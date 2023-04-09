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
    const token = jwt.sign(payload, "4e0145c478d66abc3b3ff2eb2bdb388bf56dfd3d8faa3fdeedc54790f752c3a9e7fc2904d35f4f2287eb3a5286c54171098bff66831b118d58ae3baea6d42393fc0632e8f8a99ef34a00c5a48cb6");
  
    return token;
  }
  
