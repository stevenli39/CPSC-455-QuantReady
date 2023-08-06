const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = mongoose.model('users');

// Route to handle the PUT request for updating a user
router.put('/:userId', async function (req, res, next) {
  try {
    const user = await User.findById(req.params.userId);
    if (!user) {
      return res.status(404).send("User not found");
    }

    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    user.email = req.body.email;
    user.isAdmin = req.body.isAdmin;
    user.role = req.body.role;
    user.questionHistory = req.body.questionHistory;

    await user.save();
    return res.send(user);
  } catch (err) {
    console.log(err);
    return res.status(500).send("An error occurred");
  }
});

module.exports = router;
