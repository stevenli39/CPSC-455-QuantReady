const mongoose = require('mongoose');
const { Schema } = mongoose;

// const questionSchema = new Schema({
//     type: String,
//     description: String,
//     levelOfDifficulty: String,
//     name: String,
//     correctAnswer: String,
// });

const questionSchema = new mongoose.Schema({
    id: Number,
    questionName: String,
    questionDescription: String,
    questionType: String,
    levelOfDifficulty: String,
    answer: String,
    answerStatus: Number,
  });

mongoose.model('questions', questionSchema);


