import React, { useState } from "react";
import { Checkbox, List, ListItem, ListItemText, Typography } from "@mui/material";

function parseOptions(optionsString) {
    const optionsArray = optionsString.split(/\n(?=\s*[a-z]\.\s)/i).filter((option) => option.trim() !== "");
    return optionsArray;
  }
function MCQQuestion({ selectedQuestion }) {
  console.log(selectedQuestion.options);
  const options = parseOptions(selectedQuestion.options);

  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionSelect = (index) => {
    // Check if the option is already selected and toggle its state accordingly
    if (selectedOptions.includes(index)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== index));
    } else {
      setSelectedOptions([...selectedOptions, index]);
    }
  };

  return (
    <div>
      <Typography variant="h6">Multiple Choice Question</Typography>
      <Typography variant="body1">{selectedQuestion.name}</Typography>
      <Typography variant="body1">{selectedQuestion.description}</Typography>
      {/* Display MCQ options */}
      <List>
        {options.map((option, index) => (
          <ListItem key={index} disablePadding onClick={() => handleOptionSelect(index)}>
            <Checkbox
              edge="start"
              checked={selectedOptions.includes(index)}
              tabIndex={-1}
              disableRipple
              inputProps={{ "aria-labelledby": `checkbox-list-label-${index}` }}
            />
            <ListItemText primary={option} id={`checkbox-list-label-${index}`} />
          </ListItem>
        ))}
      </List>
      {/* Add other relevant details for MCQ questions */}
    </div>
  );
}

export default MCQQuestion;
