import React, { useState } from "react";
import { FormControl, FormControlLabel, Radio, RadioGroup } from "@mui/material";

function BinaryQuestion({ selectedQuestion }) {
  const [selectedAnswer, setSelectedAnswer] = useState("");

  const handleAnswerChange = (event) => {
    setSelectedAnswer(event.target.value);
  };

  return (
    <div>
      <h3>Binary Question</h3>
      <p>{selectedQuestion.name}</p>
      <p>{selectedQuestion.description}</p>

      <FormControl component="fieldset">
        <RadioGroup
          name="binaryQuestion"
          value={selectedAnswer}
          onChange={handleAnswerChange}
        >
          <FormControlLabel
            value="True"
            control={<Radio />}
            label="True"
          />
          <FormControlLabel
            value="False"
            control={<Radio />}
            label="False"
          />
        </RadioGroup>
      </FormControl>

      {/* Add other relevant details for Binary questions */}
    </div>
  );
}

export default BinaryQuestion;
