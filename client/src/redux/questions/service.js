export const getQuestions = async () => {
  const response = await fetch('http://localhost:3001/questions', {
    method: 'GET'
  });
  return response.json();
};

export const clearQuestions = async () => {
const response = await fetch('http://localhost:3001/questions/clear', {
  method: 'POST'
});
const data = await response.json();
  if (!response.ok) {
    const errorMsg = data?.message;
    throw new Error(errorMsg)
  }
  
  return data;
};

export const addQuestion = async (question) => {
  const response = await fetch('http://localhost:3001/questions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(question)
  });

  const data = await response.json();
  if (!response.ok) {
    const errorMsg = data?.message;
    throw new Error(errorMsg)
  }
  
  return data;
};

export const deleteQuestion = async (deleteId) => {
  const response = await fetch('http://localhost:3001/questions/${questionId}', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(deleteId)
  });

  const data = await response.json();
  if (!response.ok) {
    const errorMsg = data?.message;
    throw new Error(errorMsg)
  }
  
  return data;
};
