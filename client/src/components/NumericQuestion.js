import React, { useState } from "react";
import { TextField } from "@mui/material";

function NumericQuestion({ selectedQuestion }) {
  const [answer, setAnswer] = useState("");

  const handleAnswerChange = (event) => {
    // Remove any non-numeric characters from the input value
    const numericValue = event.target.value.replace(/\D/, "");
    setAnswer(numericValue);
  };

  return (
    <div>
      <h3>Numeric Question</h3>
      <p>{selectedQuestion.name}</p>
      <p>{selectedQuestion.description}</p>

      {/* Numeric input field */}
      <TextField
        label="Your Answer"
        value={answer}
        onChange={handleAnswerChange}
        type="number" // Set the type attribute to "number" to accept only numeric values
        className="answerInput"
        fullWidth
      />

      {/* Add other relevant details for Numeric questions */}
    </div>
  );
}

export default NumericQuestion;

