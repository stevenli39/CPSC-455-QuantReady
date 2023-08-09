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
import Scratchpad from "./Scratchpad";
import { fetchQuestions } from "../api/questions";
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import BinaryQuestion from "./BinaryQuestion";
import MCQQuestion from "./MCQQuestion";
import NumericQuestion from "./NumericQuestion";
import ShortAnswerQuestion from "./ShortAnswerQuestion";
import TrickQuestion from "./TrickQuestion";
import CommentSection from "./CommentSection";

import { updateUser } from "../redux/actions/authActions";


function QuestionsList() {
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [questionsList, setQuestionsList] = useState([]);
  const [filterName, setFilterName] = useState("");
  const [answer, setAnswer] = useState("");
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
  const questionsByType = {
    "Numeric": [],
    "MCQ": [],
    "Short-Answer": [],
    "Binary": [],
    "Trick": [],
  };

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
        question.name.toLowerCase().includes(filterName.toLowerCase())
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

  const renderQuestionComponent = (questionType) => {
    switch (questionType) {
      case "Short-Answer":
        return <ShortAnswerQuestion selectedQuestion={selectedQuestion} />;
      case "MCQ":
        return <MCQQuestion selectedQuestion={selectedQuestion} />;
      case "Trick":
        return <TrickQuestion selectedQuestion={selectedQuestion} />;
      case "Numeric":
        return <NumericQuestion selectedQuestion={selectedQuestion} />;
      case "Binary":
        return <BinaryQuestion selectedQuestion={selectedQuestion} />;
      default:
        return null;
    }
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
        <div className="categories-container">
          {/* Render sections for each type */}
          {["Numeric", "MCQ", "Short-Answer", "Binary", "Trick"].map((type) => (
            <Card key={type} className={`category-card ${selectedQuestion && selectedQuestion.type.trim() === type ? 'active' : ''}`}>
              <CardContent>
                <Typography variant="h5">{type} Questions</Typography>
                {questionsList
                  .filter((question) => question.type === type)
                  .map((question, index) => (
                    <Typography
                      key={index}
                      variant="body1"
                      className="question"
                      onClick={() => handleQuestionClick(question)}
                    >
                      {`${index + 1}. ${question.name}`}
                    </Typography>
                  ))}
              </CardContent>
            </Card>
          ))}
        </div>
  
        <Card className="card">
          <CardContent>
            {selectedQuestion ? renderQuestionComponent(selectedQuestion.type.trim()) : (
              <Typography variant="body1">
                Click on a question to view it
              </Typography>
            )}
            {/* Conditionally render the appropriate question component */}
  
            {selectedQuestion && selectedQuestion.type.trim() !== "Binary" &&selectedQuestion.type.trim() !== "Numeric" && selectedQuestion.type.trim() !== "MCQ" &&(
              <form className="answerForm">
                <TextField
                  label="Your Answer"
                  value={answer}
                  onChange={handleAnswerChange}
                  className="answerInput"
                  fullWidth
                />
              </form>
            )}
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleAnswerSubmit(selectedQuestion)}
              className="submitButton"
            >
              Submit
            </Button>
            {selectedQuestion && showCorrectAnswer &&(
        <Typography variant="body1">Correct Answer: {selectedQuestion.correctAnswer}</Typography>
      )}
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
};


export default QuestionsList;
