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
import EditIcon from "@mui/icons-material/Edit";

// ... (existing imports and code)

function AdminPage({ questions, createQuestion, updateQuestionById, deleteQuestionById }) {
    const [questionId, setQuestionId] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [levelOfDifficulty, setLevelOfDifficulty] = useState("");
    const [name, setName] = useState("");
    const [correctAnswer, setCorrectAnswer] = useState("");
    const [questionList, setQuestionList] = useState([]);
    const [selectedQuestion, setSelectedQuestion] = useState(null);
  
    const handleAddQuestion = async () => {
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
  
    const handleUpdateQuestion = async (id) => {
      const updatedQuestion = {
        type: selectedQuestion.type,
        description: selectedQuestion.description,
        levelOfDifficulty: selectedQuestion.levelOfDifficulty,
        name: selectedQuestion.name,
        correctAnswer: selectedQuestion.correctAnswer,
      };
      try {
        await updateQuestionById(id, updatedQuestion);
        setQuestionList((prevList) =>
          prevList.map((question) =>
            question._id === id ? { ...question, ...updatedQuestion } : question
          )
        );
        setQuestionId("");
        setSelectedQuestion(null); // Reset the selected question after update
      } catch (error) {
        console.error("Error updating question:", error);
      }
    };
  
    const handleDeleteQuestion = async (id) => {
      try {
        await deleteQuestionById(id);
        setQuestionList((prevList) => prevList.filter((question) => question._id !== id));
      } catch (error) {
        console.error("Error deleting question:", error);
      }
    };
  
    const handleSelectQuestion = (question) => {
      setQuestionId(question._id);
      setSelectedQuestion({
        type: question.type,
        description: question.description,
        levelOfDifficulty: question.levelOfDifficulty,
        name: question.name,
        correctAnswer: question.correctAnswer,
      });
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
            </form>
          </CardContent>
        </Card>
  
        <CardContent>
          <Typography variant="h5">Questions List</Typography>
          {questionList.map((question) => (
            <Card key={question._id} className="question-item" variant="outlined">
              <CardContent>
                {questionId === question._id ? (
                  <>
                    <TextField
                      label="Type"
                      value={selectedQuestion.type}
                      onChange={(e) =>
                        setSelectedQuestion((prevQuestion) => ({
                          ...prevQuestion,
                          type: e.target.value,
                        }))
                      }
                      fullWidth
                    />
                    <TextField
                      label="Description"
                      value={selectedQuestion.description}
                      onChange={(e) =>
                        setSelectedQuestion((prevQuestion) => ({
                          ...prevQuestion,
                          description: e.target.value,
                        }))
                      }
                      fullWidth
                    />
                    <TextField
                      label="Level of Difficulty"
                      value={selectedQuestion.levelOfDifficulty}
                      onChange={(e) =>
                        setSelectedQuestion((prevQuestion) => ({
                          ...prevQuestion,
                          levelOfDifficulty: e.target.value,
                        }))
                      }
                      fullWidth
                    />
                    <TextField
                      label="Name"
                      value={selectedQuestion.name}
                      onChange={(e) =>
                        setSelectedQuestion((prevQuestion) => ({
                          ...prevQuestion,
                          name: e.target.value,
                        }))
                      }
                      fullWidth
                    />
                    <TextField
                      label="Correct Answer"
                      value={selectedQuestion.correctAnswer}
                      onChange={(e) =>
                        setSelectedQuestion((prevQuestion) => ({
                          ...prevQuestion,
                          correctAnswer: e.target.value,
                        }))
                      }
                      fullWidth
                    />
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleUpdateQuestion(question._id)}
                    >
                      Save
                    </Button>
                  </>
                ) : (
                  <>
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
                    <IconButton onClick={() => handleSelectQuestion(question)} aria-label="edit">
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      onClick={() => handleDeleteQuestion(question._id)}
                      aria-label="delete"
                    >
                      <DeleteIcon />
                    </IconButton>
                  </>
                )}
              </CardContent>
            </Card>
          ))}
        </CardContent>
      </div>
    );
  }
  
  export default AdminPage;
  