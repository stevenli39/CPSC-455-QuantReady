import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Typography,
  Card,
  CardContent,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

function AdminPage({ questions, createQuestion, updateQuestionById, deleteQuestionById }) {
    const [questionId, setQuestionId] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [levelOfDifficulty, setLevelOfDifficulty] = useState("");
    const [name, setName] = useState("");
    const [correctAnswer, setCorrectAnswer] = useState("");
    const [questionList, setQuestionList] = useState([]);
  

  const handleAddQuestion = async () => {
    // Handle adding a new question
    const newQuestion = {
      type,
      description,
      levelOfDifficulty,
      name,
      correctAnswer,
    };
    try {
        const addedQuestion = await createQuestion(newQuestion);
        setQuestionList((prevList) => [...prevList, addedQuestion]);
      } catch (error) {
        console.error("Error adding question:", error);
      }
    
    // Clear input fields after adding
    setType("");
    setDescription("");
    setLevelOfDifficulty("");
    setName("");
    setCorrectAnswer("");
  };

  useEffect(() => {
    if (Array.isArray(questions)) {
      setQuestionList(questions);
    } else if (questions instanceof Promise) {
      questions
        .then((data) => {
          if (Array.isArray(data)) {
            setQuestionList(data);
          }
        })
        .catch((error) => {
          console.error("Error fetching questions:", error);
        });
    }
  }, [questions]);

  const handleUpdateQuestion = () => {
    // Handle updating the selected question
    const updatedQuestion = {
      type,
      description,
      levelOfDifficulty,
      name,
      correctAnswer,
    };
    updateQuestionById(questionId, updatedQuestion);
  };

  const handleDeleteQuestion = async (id) => {
    // Handle deleting the selected question
    try {
        await deleteQuestionById(id);
        setQuestionList((prevList) => prevList.filter((question) => question._id !== id));
      } catch (error) {
        console.error("Error deleting question:", error);
      }
  };

const handleSelectQuestion = (question) => {
    // Set the input field values based on the selected question
    setQuestionId(question.id);
    setType(question.type);
    setDescription(question.description);
    setLevelOfDifficulty(question.levelOfDifficulty);
    setName(question.name);
    setCorrectAnswer(question.correctAnswer);
  };

  return (
    <div>
      <Card>
        <CardContent>
          <Typography variant="h5">Manage Questions</Typography>
          <form>
            <TextField
              label="Type"
              value={type}
              onChange={(e) => setType(e.target.value)}
              fullWidth
            />
            <TextField
              label="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              fullWidth
            />
            <TextField
              label="Level of Difficulty"
              value={levelOfDifficulty}
              onChange={(e) => setLevelOfDifficulty(e.target.value)}
              fullWidth
            />
            <TextField
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              fullWidth
            />
            <TextField
              label="Correct Answer"
              value={correctAnswer}
              onChange={(e) => setCorrectAnswer(e.target.value)}
              fullWidth
            />
            <Button variant="contained" color="primary" onClick={handleAddQuestion}>
              Add Question
            </Button>
            <Button variant="contained" color="primary" onClick={handleUpdateQuestion}>
              Update Question
            </Button>
          </form>
        </CardContent>
      </Card>

      <CardContent>
  <Typography variant="h5">Questions List</Typography>
    {questionList.map((question) => (
    <Card key={question.id} className="question-item" variant="outlined">
      <CardContent>
        <Typography variant="body1" gutterBottom>
          {question.name}
        </Typography>
        <Typography variant="body2">{question.description}</Typography>
        <Typography variant="body2">
          Level of Difficulty: {question.levelOfDifficulty}
        </Typography>
        <Typography variant="body2">Type: {question.type}</Typography>
        <Typography variant="body2">
          Correct Answer: {question.correctAnswer}
        </Typography>
        <IconButton
                onClick={() =>
                     handleDeleteQuestion(question._id)}
                aria-label="delete"
              >
                <DeleteIcon />
        </IconButton>
      </CardContent>
    </Card>
  ))}
</CardContent>
    </div>
  );
}

export default AdminPage;