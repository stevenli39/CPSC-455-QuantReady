import React, {useState} from "react";
import ProgressDisplay from './ProgressDisplay'
import './QuestionHistory.css'

export default function QuestionHistory(){
    const questions = [{id: 1, question: 'Question1', questionPage: "ProgressDisplay.js"}, {id: 2, question: "Question2", questionPage: ""}];
    const [displayStatus, setDisplayStatus] = useState({id: '', question: '', questionPage: "ProgressDisplay.js"})


    return(
        <div>
            <h1>
                Questions History
            </h1>
            <div className="page">
            <ol>
                {questions.map((questions) => (
                    <li key={questions.id} onClick={() => setDisplayStatus(questions)}>
                        {questions.question}
                    </li>
                ))}
            </ol>
            <ProgressDisplay/>
            <ul className="sidebar">
                <li>Question ID: {displayStatus.id}</li>
                <li>Question: {displayStatus.question}</li>
                

            </ul>
            </div>
            
        </div>
    )
}