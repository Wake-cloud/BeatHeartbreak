const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.Router();

// Middleware to check token validity
function verifyToken(req, res, next) {
  const token = req.headers['x-auth-token'];
  if (!token) return res.status(401).json({ error: 'No token, authorization denied' });

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(400).json({ error: 'Invalid token' });
    req.userId = decoded.userId;
    next();
  });
}

// Journal Entry Route (Post)
router.post('/entry', verifyToken, async (req, res) => {
  const { entryText } = req.body;

  try {
    const user = await User.findById(req.userId);
    user.journal.push({ text: entryText, date: new Date() });
    await user.save();
    res.status(201).json({ message: 'Journal entry added successfully' });
  } catch (err) {
    res.status(400).json({ error: 'Failed to save journal entry' });
  }
});

// Get Journal Entries Route
router.get('/entries', verifyToken, async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    res.json(user.journal);
  } catch (err) {
    res.status(400).json({ error: 'Failed to retrieve journal entries' });
  }
});

module.exports = router;
