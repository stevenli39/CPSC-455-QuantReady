import React from "react";

function TrickQuestion({ selectedQuestion }) {
  return (
    <div>
      <h3>Trick Question</h3>
      <p>{selectedQuestion.name}</p>
      <p>{selectedQuestion.description}</p>
      {/* Add other relevant details for Trick questions */}
    </div>
  );
}

export default TrickQuestion;

