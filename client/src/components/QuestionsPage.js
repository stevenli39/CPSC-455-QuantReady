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
import { useSelector , useDispatch} from 'react-redux'
import { deleteQuestionAsync, getQuestionsAsync, addQuestionAsync} from '../redux/questions/thunks';

import { Provider } from 'react-redux';
import store from '../redux/store';
import { addQuestion } from "../redux/questions/service";



function QuestionsList() {
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [questionsList, setQuestionsList] = useState([]);
  const [filterName, setFilterName] = useState("");
  const [answer, setAnswer] = useState("");
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);

  const dispatch = useDispatch();

  const questions = useSelector((state)=> state.questions.questionsList);
  useEffect(()=> {
    dispatch(getQuestionsAsync());
  }, [])

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
    ? questions.filter((question) =>
        question.questionName.toLowerCase().includes(filterName.toLowerCase())
      )
    : questions;

  useEffect(() => {
    setQuestionsList(questions);
  }, [questions]);

  const handleAnswerChange = (question) => {
    setAnswer(question.target.value);
  };

  const handleAnswerSubmit = () => {
    // Handle answer submission logic here
    if (selectedQuestion) {
      setShowCorrectAnswer(true);
      const correctAnswer = questions.find(
        (question) => question.id === selectedQuestion.id
      ).answer;
    }

    const questionObject = {
      id: selectedQuestion.id,
      questionName: selectedQuestion.questionName,
      question: selectedQuestion.question,
      answer: selectedQuestion.answer,
      answerStatus: answer,
    };

    dispatch(deleteQuestionAsync(selectedQuestion.id));
    dispatch(addQuestionAsync(questionObject));
  };

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
          {filteredQuestions.map((question) => (
            <Typography
              key={question.id}
              variant="body1"
              className="question"
              onClick={() => handleQuestionClick(question)}
            >
              {question.id}. {question.questionName}
            </Typography>
          ))}
        </CardContent>
      </Card>
      <Card className="card">
        <CardContent>
          {selectedQuestion ? (
            <div>
              <Typography variant="h5">
                {selectedQuestion.questionName}
              </Typography>
              <Typography variant="body1">
                {selectedQuestion.question}
              </Typography>
              {showCorrectAnswer && (
                <div>
                  <Typography variant="h6">Correct Answer:</Typography>
                  <Typography variant="body1">
                    {selectedQuestion.answer}
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
              onClick={handleAnswerSubmit}
              className="submitButton"
            >
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>
      
      <Scratchpad/>
      
    </div>
  );
}

export default QuestionsList;
