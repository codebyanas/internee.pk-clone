require('dotenv').config();
const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  // Get the token from the Authorization header
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: "No token, authorization denied." });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Add the user payload to the request object
    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid token." });
  }
};

module.exports = authMiddleware;
