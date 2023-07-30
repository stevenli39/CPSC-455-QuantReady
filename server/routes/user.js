var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const User = mongoose.model('users');

router.get('/:googleId/questionHistory', async (req, res) => {
    const { googleId } = req.params;

    try {
        const user = await User.findOne({ googleId });
    
        if (!user) {
          return res.status(404).json({ error: 'User not found' });
        }
    
        const questionHistory = user.questionHistory;
        return res.json({ questionHistory });
      } catch (error) {
        console.error('Error retrieving user question history:', error);
        return res.status(500).json({ error: 'Server error' });
      }
});

router.post('/:googleId/questionHistory', async (req, res) => {
    const { googleId } = req.params;
    const { question } = req.body;
  
    try {
      const user = await User.findOne({ googleId });
  
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      user.questionHistory = questionHistory.append(question);
      await user.save();
  
      return res.json({ message: 'Question history updated successfully' });
    } catch (error) {
      console.error('Error updating user question history:', error);
      return res.status(500).json({ error: 'Server error' });
    }
  });
