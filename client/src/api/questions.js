import axios from "axios";

// Helper function to fetch all questions
export const fetchQuestions = () => {
    return  axios.get('http://localhost:3001/questions')
      .then(response => response.data)
      .catch(error => {
        console.error(error);
        throw error;
      });
  };



  // Helper function to fetch a specific question by ID
export const fetchQuestionById = (questionId) => {
    return axios.get(`http://localhost:3001/questions/${questionId}`)
      .then(response => response.data)
      .catch(error => {
        console.error(error);
        throw error;
      });
  };

  // Helper function to fetch the answer of a specific question by ID
export const fetchQuestionAnswer = (questionId) => {
    return axios.get(`http://localhost:3001/questions/${questionId}/answer`)
      .then(response => response.data)
      .catch(error => {
        console.error(error);
        throw error;
      });
  };
  

// Helper function to create a new question
export const createQuestion = (questionData) => {
    return axios.post('http://localhost:3001/questions', questionData)
      .then(response => response.data)
      .catch(error => {
        console.error(error);
        throw error;
      });
  };


// Helper function to update an existing question by ID
export const updateQuestionById = (questionId, questionData) => {
    return axios.put(`http://localhost:3001/questions/${questionId}`, questionData)
      .then(response => response.data)
      .catch(error => {
        console.error(error);
        throw error;
      });
  };


// Helper function to delete a question by ID
export const deleteQuestionById = (id) => {
    console.log("HIIII");
    return axios.delete(`http://localhost:3001/questions/${id}`)
      .then(response => response.data.message)
      .catch(error => {
        console.error(error);
        throw error;
      });
  };