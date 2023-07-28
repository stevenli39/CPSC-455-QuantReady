import axiosInstance from "./axiosConfig";


// Helper function to fetch all questions
export const fetchQuestions = () => {
    return  axiosInstance.get('/questions')
      .then(response => response.data)
      .catch(error => {
        console.error(error);
        throw error;
      });
  };



  // Helper function to fetch a specific question by ID
export const fetchQuestionById = (questionId) => {
    return axiosInstance.get(`/questions/${questionId}`)
      .then(response => response.data)
      .catch(error => {
        console.error(error);
        throw error;
      });
  };

  // Helper function to fetch the answer of a specific question by ID
export const fetchQuestionAnswer = (questionId) => {
    return axiosInstance.get(`/questions/${questionId}/answer`)
      .then(response => response.data)
      .catch(error => {
        console.error(error);
        throw error;
      });
  };
  

// Helper function to create a new question
export const createQuestion = (questionData) => {
    return axiosInstance.post('/questions', questionData)
      .then(response => response.data)
      .catch(error => {
        console.error(error);
        throw error;
      });
  };


// Helper function to update an existing question by ID
export const updateQuestionById = (questionId, questionData) => {
    return axiosInstance.put(`/questions/${questionId}`, questionData)
      .then(response => response.data)
      .catch(error => {
        console.error(error);
        throw error;
      });
  };


// Helper function to delete a question by ID
export const deleteQuestionById = (id) => {
    return axiosInstance.delete(`/questions/${id}`)
      .then(response => response.data.message)
      .catch(error => {
        console.error(error);
        throw error;
      });
  };