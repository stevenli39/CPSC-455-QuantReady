const express = require('express');
const Comment =  require('../models/Comment')

const router = express.Router();

router.get('/:questionID', async (req, res) => {
    try {
        const comments = await Comment.find({questionID: req.params.questionID})
        res.json(comments);
    } catch (err) {
        res.status(500).send(err.message)
    }
})

router.post('/', async (req, res) => {
    try {
        const { questionID, userID, firstName, timeStamp, content } = req.body;
        const newComment = new Comment({
            questionID,
            userID,
            firstName,
            timeStamp,
            content
        });
        await newComment.save();
        res.json(newComment);
    } catch (err) {
        res.status(500).send(err.message);
    }
});


module.exports = router;
