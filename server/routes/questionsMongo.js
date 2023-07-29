const fs = require('fs');

var express = require('express');
var router = express.Router();

const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  id: Number,
  questionName: String,
  questionDescription: String,
  questionType: String,
  levelOfDifficulty: String,
  correctAnswer: String,
  answerStatus: Number,
});

const Questions = mongoose.model('Questions', questionSchema);
const QuestionHistory = mongoose.model('QuestionHistory', questionSchema)

/* GET users listing. */
router.get('/', async function(req, res, next) {

  try {
    const questions = await Questions.find();
    res.json(questions);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

router.post('/', async function (req, res, next) {
  try {
    const question = new Questions(req.body);
    await question.save();
    res.json(question);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});


router.delete('/:item_name', async function (req, res, next) {
  try {
    const deleteId = req.body.deleteId ;
    await Questions.deleteOne({ id: deleteId}); // Delete item from MongoDB
    const questions = await Questions.find(); // Fetch all items after deletion
    res.json(questions);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

router.post('/clear', async function (req, res, next) {
  try {
    await Questions.deleteMany({});
    res.send([]);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

module.exports = router;


