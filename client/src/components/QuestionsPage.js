import React, { useState, useEffect } from "react";
import "../styles/questionsList.css";
import { Search } from "@mui/icons-material";
import {
  TextField,
  Card,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import CommentSection from "./CommentSection";
import { fetchQuestions } from "../api/questions";
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { updateUser } from "../redux/actions/authActions";

function QuestionsList() {
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [questionsList, setQuestionsList] = useState([]);
  const [filterName, setFilterName] = useState("");
  const [answer, setAnswer] = useState("");
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
  const loginState = useSelector(state => state.auth);
  const isLoggedIn = (loginState && loginState.user);
  const user = isLoggedIn ? loginState.user : null;
  const dispatch = useDispatch();
  const handleFilterChange = (e) => {
    setFilterName(e.target.value);
  };

  const handleFilterBlur = () => {
    setFilterName("");
  };

  const handleQuestionClick = (question) => {
    setSelectedQuestion(question);
    setShowCorrectAnswer(false);
    setAnswer("");
  };

  const filteredQuestions = filterName
    ? questionsList.filter((question) =>
        question.questionName.toLowerCase().includes(filterName.toLowerCase())
      )
    : questionsList;

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Make your API call here using fetch or axios or any other library
        const response = await fetchQuestions();
        setQuestionsList(response); // Update the state with the fetched data
      } catch (error) {
        console.error(error);
      }
    };



    fetchData(); // Call the function to fetch data when the component loads
  }, []);

  const handleAnswerChange = (question) => {
    setAnswer(question.target.value);
  }; 

  const handleAnswerSubmit = async (selectedQuestion) => {
    // Handle answer submission logic here
    let questionHistory = user.questionHistory;

    if (!questionHistory.some((question) => question.name === selectedQuestion.name)) {
      const newQuestionHistory = [...questionHistory, selectedQuestion];
      dispatch(updateUser(user._id, { ...user, questionHistory: newQuestionHistory }));
    }
    setShowCorrectAnswer(true);
  };

  if (isLoggedIn) {
    return (
      <div className="questions">
        <Card className="card">
          <CardContent>
            <div className="search-container">
              <TextField
                label="Filter by Name"
                value={filterName}
                onChange={handleFilterChange}
                onBlur={handleFilterBlur}
                fullWidth
                InputProps={{
                  startAdornment: <Search />,
                }}
              />
            </div>
            {filteredQuestions.map((question, index) => (
              <Typography
                key={question.id}
                variant="body1"
                className="question"
                onClick={() => handleQuestionClick(question)}
              >
                {`${index + 1}. ${question.name}`}
              </Typography>
            ))}
          </CardContent>
        </Card>
        <Card className="card">
          <CardContent>
            {selectedQuestion ? (
              <div >
                <Typography variant="h5">
                  {selectedQuestion.name}
                </Typography>
                <Typography variant="body2">
                  Role Type: {selectedQuestion.type}
                </Typography>
                <Typography variant="body2">
                  Level of Difficulty: {selectedQuestion.levelOfDifficulty}
                </Typography>
                <Typography variant="body1">
                  Description: {selectedQuestion.description}
                </Typography>
                {showCorrectAnswer && (
                  <div>
                    <Typography variant="h6">Correct Answer:</Typography>
                    <Typography variant="body1">
                      {selectedQuestion.correctAnswer}
                    </Typography>
                  </div>
                )}
              </div>
            ) : (
              <Typography variant="body1">
                Click on a question to view it
              </Typography>
            )}
            <form className="answerForm">
              <TextField
                label="Your Answer"
                value={answer}
                onChange={handleAnswerChange}
                className="answerInput"
                fullWidth
              />
              <Button
                variant="contained"
                color="primary"
                onClick={() => handleAnswerSubmit(selectedQuestion)}
                className="submitButton"
              >
                Submit
              </Button>
            </form>
          </CardContent>
        </Card>
        {selectedQuestion && <CommentSection questionID={selectedQuestion._id} />}
      </div>
    );
  } else {
    return (
      <Typography variant="body1">
        Please login to view questions
      </Typography>
    )
  }
}

export default QuestionsList;
