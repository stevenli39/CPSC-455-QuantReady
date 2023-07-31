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

import { fetchQuestions } from "../api/questions";


export default function QuestionHistory(){

  const [questionsHistory, setQuestionsHistory] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Make your API call here using fetch or axios or any other library


        // delete once backend setup
        const questions = [
          {name: 'Q1', description: 'desc', type: "MCQ", levelOfDifficulty: "hard"},
          {name: 'Q2', description: 'desc2', type: "MCQ", levelOfDifficulty: "easy"}];
      
      
        setQuestionsHistory(questions);

        // uncomment once you have backend setup and replace fetchQuestion()

        // const response = await fetchQuestions();
        // setQuestionsHistory(response); // Update the state with the fetched data
      } catch (error) {
        console.error(error);
      }
    };

    fetchData(); // Call the function to fetch data when the component loads
  }, []);

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
}