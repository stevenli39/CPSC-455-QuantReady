const mongoose = require('mongoose');
const {Schema} = mongoose;

const CommentSchema = new Schema({
    questionID: Number,
    userID: String,
    firstName: String,
    timeStamp: String,
    content: String
})

const Comment = mongoose.model('comments', CommentSchema);
module.exports = Comment;
