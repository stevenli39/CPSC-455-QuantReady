import React from "react";

function ShortAnswerQuestion({ selectedQuestion }) {
  return (
    <div>
      <h3>Short Answer Question</h3>
      <p>{selectedQuestion.name}</p>
      <p>{selectedQuestion.description}</p>
      {/* Add other relevant details for Short Answer questions */}
    </div>
  );
}

export default ShortAnswerQuestion;
