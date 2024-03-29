const mongoose = require('mongoose');
const { Schema } = mongoose;

const questionSchema = new Schema({
    type: String,
    description: String,
    levelOfDifficulty: String,
    name: String,
    correctAnswer: String,
    RoleType: String
});

mongoose.model('questions', questionSchema);