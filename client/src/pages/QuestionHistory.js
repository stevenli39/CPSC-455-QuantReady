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
        <div>
          <h1>
              Questions History
          </h1>
          <div className="page">
            <div className="pageLeft">
              <Card className = 'questionsList'>
                  <CardContent>
                      <p>
                          Recent History:
                      </p>
                      <ol>
                          {questionsHistory.map((question) => (
                              <li key={question.name} onClick={() => setDisplayStatus(question)}>
                                  {question.name}
                              </li>
                          ))}
                      </ol>
                  </CardContent>
              </Card>
                <Card>
                  <CardContent>
                    <div >
                      <Typography variant="body1">
                        Question Name: {displayStatus.name}
                      </Typography>
                      <Typography variant="body1">
                        Role Type: {displayStatus.type}
                      </Typography>
                      <Typography variant="body1">
                        Level of Difficulty: {displayStatus.levelOfDifficulty}
                      </Typography>
                      <Typography variant="body1">
                        Description: {displayStatus.description}
                      </Typography>
                    </div>
                    <p>
                      Click on a question to view its details
                    </p>
                  </CardContent>
              </Card>
            </div>
            <div className="pageRight">
              <Card className="graphs">
                  <CardContent>
                    <Typography>Type:</Typography>
                    <br></br>
                      <BarGraph data = {dataType}/>
                  </CardContent>
                  <CardContent>
                  <Typography>Difficulty:</Typography>
                    <br></br>
                      <BarGraph data = {dataDifficulty}/>
                  </CardContent>
              </Card>
            </div>
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