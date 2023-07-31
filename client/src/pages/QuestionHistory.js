import React, {useState, useEffect} from "react";
import BarGraph from '../components/BarGraph'
import '../styles/QuestionHistory.css'
import {
    TextField,
    Card,
    CardContent,
    Typography,
    Button,
  } from "@mui/material";
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';


export default function QuestionHistory(){
  const loginState = useSelector(state => state.auth);
  const isLoggedIn = (loginState && loginState.user);
  const questionsHistory = isLoggedIn ? loginState.user.questionHistory : [];

  // define score stores
  let scoreNumeric= 0;
  let scoreMCQ= 0;
  let scoreSA = 0; 
  

  questionsHistory.forEach((question) => {
    if(question.type == "MCQ"){
      scoreMCQ += 1;
    } else if(question.type === "Numeric"){
      scoreNumeric += 1;
    }else if(question.type === "Short-answer"){
      scoreSA += 1;
    }
  })

  const data = [
    { questionType: 'MCQ', score: scoreMCQ },
    { questionType: 'ShortAnswer', score: scoreSA },
    { questionType: 'Numeric', score: scoreNumeric},
  ];


  
    const [displayStatus, setDisplayStatus] = useState({name: '', description: '', type: "", levelOfDifficulty: ""})

    if (isLoggedIn) {
      return(
        <div>
          <h1>
              Questions History
          </h1>
          <div className="page">
              <Card className = 'questionsList'>
                  <CardContent>
                      <ol>
                          {questionsHistory.map((question) => (
                              <li key={question.name} onClick={() => setDisplayStatus(question)}>
                                  {question.name}
                              </li>
                          ))}
                      </ol>
                      <p>
                          Click on a question to view its details
                      </p>
                  </CardContent>
              </Card>

              <div className="pageRight">
              
              <Card>
                  <ul className="sidebar">
                      <li>Question Name: {displayStatus.name}</li>
                      <li>Question Description: {displayStatus.description}</li>
                      <li>Question Type:{displayStatus.type}</li>
                      <li>Question Difficulty: {displayStatus.levelOfDifficulty}</li>  
                        

                  </ul>
              </Card>

              <Card>
                  <CardContent>
                      <BarGraph data = {data}/>
                  </CardContent>
              </Card>
              </div>
          </div>
      </div>
    )
  } else {
    return <Navigate to="/login" />;
  }
}