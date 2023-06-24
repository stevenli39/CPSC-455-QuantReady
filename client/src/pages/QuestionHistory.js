import React, {useState} from "react";
import ProgressDisplay from '../components/ProgressDisplay'
import '../styles/QuestionHistory.css'
import {
    TextField,
    Card,
    CardContent,
    Typography,
    Button,
  } from "@mui/material";

export default function QuestionHistory(){
    const questions = [
        {id: 1, question: 'Question1', questionType: "Type A", questionStatus: "complete"},
         {id: 2, question: "Question2", questionType: "Type B", questionStatus: "incomplete"}];
    const [displayStatus, setDisplayStatus] = useState({id: '', question: '', questionType: "", questionStatus: ""})


    return(
        <div>
            <h1>
                Questions History
            </h1>
            <div className="page">
                <Card className = 'card'>
                    <CardContent>
                        <ol>
                            {questions.map((questions) => (
                                <li key={questions.id} onClick={() => setDisplayStatus(questions)}>
                                    {questions.question}
                                </li>
                            ))}
                        </ol>
                        <p>
                            Click on a question to view its details
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent>
                        <ProgressDisplay/>
                    </CardContent>
                </Card>
                
                <Card>
                    <ul className="sidebar">
                        <li> <label>Question ID: {displayStatus.id}</label></li>
                        <li>Question: {displayStatus.question}</li>
                        <li>Question Type:{displayStatus.questionType}</li>
                        <li>Question Status: {displayStatus.questionStatus}</li>             
                    </ul>
                </Card>
            </div>
            
        </div>
    )
}

{/* <Card className="card">
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
</CardContent> */}