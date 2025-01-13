require('dotenv').config();
const express = require('express');
const { signup, login } = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Public routes
router.post('/signup', signup);
router.post('/login', login);

// Protected route (example)
router.get('/profile', authMiddleware, (req, res) => {
  res.json({ message: "Welcome to the protected route!", user: req.user });
});

module.exports = router;

