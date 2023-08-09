import React, { useState } from "react";
import BarGraph from '../components/BarGraph'
import '../styles/QuestionHistory.css'
import {
    Card,
    CardContent,
    Typography,
  } from "@mui/material";
import { useSelector } from 'react-redux';


export default function QuestionHistory(){
  const loginState = useSelector(state => state.auth);
  const isLoggedIn = (loginState && loginState.user);
  const questionsHistory = isLoggedIn ? loginState.user.questionHistory : [];
  
  let scoreNumeric= 0;
  let scoreMCQ= 0;
  let scoreSA = 0; 

  let scoreBeginner = 0;
  let scoreIntermediate = 0;
  let scoreAdvanced = 0;

  questionsHistory.forEach((question) => {
    if(question.type === "MCQ"){
      scoreMCQ += 1;
    } else if(question.type === "Numeric"){
      scoreNumeric += 1;
    }else if(question.type === "Short-answer"){
      scoreSA += 1;
    }
    if(question.levelOfDifficulty === "Beginner"){
      scoreBeginner += 1;
    } else if(question.levelOfDifficulty === "Intermediate"){
      scoreIntermediate += 1;
    }else if(question.levelOfDifficulty === "Advanced"){
      scoreAdvanced += 1;
    }
  })

  const dataType = [
    { questionType: 'MCQ', score: scoreMCQ },
    { questionType: 'ShortAnswer', score: scoreSA },
    { questionType: 'Numeric', score: scoreNumeric},
  ];

  const dataDifficulty = [
    { questionType: 'Beginner', score: scoreBeginner },
    { questionType: 'Intermediate', score: scoreIntermediate },
    { questionType: 'Advanced', score: scoreAdvanced},
  ]; 
  
    const [displayStatus, setDisplayStatus] = useState({name: '', description: '', type: "", levelOfDifficulty: ""})

    if (isLoggedIn) {
      return(
        <div className="questionsPage">
          <Card className="header" style={{ backgroundColor: 'navy' }}>
            <CardContent>
              <Typography variant="h2" component="h1" sx={{ color: 'white', marginBottom: '1rem' }}>
                Your Progress
              </Typography>
            </CardContent>
          </Card>
          <div className="page">
              <Card className = 'questionsList' style={{ backgroundColor: '#f1efe9' }}>
                  <CardContent>
                    <Typography variant="h6" sx={{ color: 'navy', marginBottom: '1rem' }}>
                      Recent History:
                    </Typography>
                      <ol>
                          {questionsHistory.map((question) => (
                              <li key={question.name} onClick={() => setDisplayStatus(question)}>
                                  {question.name}
                              </li>
                          ))}
                      </ol>
                  </CardContent>
              </Card>
              <Card style={{ backgroundColor: '#f1efe9' }}>
                  <CardContent> 
                    <Typography variant="h6" sx={{ color: 'navy', marginBottom: '1rem' }}>
                      Question Details:
                    </Typography>
                    <div >
                      <Typography variant="body1">
                        Question Name: {displayStatus.name}
                      </Typography>
                      <Typography variant="body1">
                        Question Type: {displayStatus.type}
                      </Typography>
                      <Typography variant="body1">
                        Level of Difficulty: {displayStatus.levelOfDifficulty}
                      </Typography>
                      <Typography variant="body1">
                        Role Type: {displayStatus.roleType}
                      </Typography>
                      <Typography variant="body1">
                        Description: {displayStatus.description}
                      </Typography>
                    </div>
                    <h5>
                      Click on a question to view its details
                    </h5>
                  </CardContent>
              </Card>
              <Card className="graphs" style={{ backgroundColor: '#f1efe9' }}>
                  <CardContent>
                    <Typography variant = "h6" sx={{ color: 'navy', marginBottom: '1rem' }}>Your progress on question types:</Typography>
                      <BarGraph data = {dataType}/>
                  </CardContent>
                  <CardContent>
                  <Typography variant = "h6" sx={{ color: 'navy', marginBottom: '1rem' }}>Your progress on question difficulty:</Typography>
                      <BarGraph data = {dataDifficulty}/>
                  </CardContent>
              </Card>           
          </div>
      </div>
    )
  } else {
    return (
      <h1>
        Please log in to view your question history
      </h1>
    );
  }
}