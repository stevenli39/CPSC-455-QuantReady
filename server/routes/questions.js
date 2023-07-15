const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const Question = mongoose.model('questions');

router.get("/", async function (req, res, next) {
  try {
    const questions = await Question.find({});
    return res.send(questions);
  } catch (err) {
    console.log(err);
    return res.status(500).send("An error occurred");
  }
});

router.get("/:questionId", async function (req, res, next) {
  try {
    const question = await Question.findById(req.params.questionId);
    if (!question) {
      return res.status(404).send("Question not found");
    }
    return res.send(question);
  } catch (err) {
    console.log(err);
    return res.status(500).send("An error occurred");
  }
});


router.get("/:questionId/answer", async function (req, res, next) {
  try {
    const question = await Question.findById(req.params.questionId);
    if (!question) {
      return res.status(404).send("Question not found");
    }
    return res.send(question.answer);
  } catch (err) {
    console.log(err);
    return res.status(500).send("An error occurred");
  }
});

router.post("/", async function (req, res, next) {
  try {
    const newQuestion = new Question({
      type: req.body.type,
      description: req.body.description,
      levelOfDifficulty: req.body.levelOfDifficulty,
      name: req.body.name,
      correctAnswer: req.body.correctAnswer,
    });

    // Save the question to the database
    const question = await newQuestion.save();
    return res.send(question);
  } catch (err) {
    console.log(err);
    return res.status(500).send("An error occurred");
  }
});

router.put("/:questionId", async function (req, res, next) {
  try {
    const updatedQuestion = await Question.findByIdAndUpdate(
      req.params.questionId,
      req.body,
      { new: true }
    );
    if (!updatedQuestion) {
      return res.status(404).send("Question not found");
    }
    return res.send(updatedQuestion);
  } catch (err) {
    console.log(err);
    return res.status(500).send("An error occurred");
  }
});

router.delete("/:id", async function (req, res, next) {
  try {
    console.log("HI");
    console.log(req.params.id);
    
    const deletedQuestion = await Question.findOneAndDelete({ name: req.params.id });

    if (!deletedQuestion) {
      return res.status(404).send("Question not found");
    }
    return res.send({ message: "Question deleted" });
  } catch (err) {
    console.log(err);
    return res.status(500).send("An error occurred");
  }
});

module.exports = router;
