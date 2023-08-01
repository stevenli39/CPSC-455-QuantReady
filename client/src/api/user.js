import axios from "./axiosConfig";

export const fetchQuestionHistory = (userId) => {
    return  axios.get(`/user/${userId}/questionHistory`)
        .then(response => response.data)
        .catch(error => {
        console.error(error);
        throw error;
    });
};

export const addQuestionToHistory = (userId, questionId) => {
    return axios.post(`/user/${userId}`, questionId)
      .then(response => response.data)
      .catch(error => {
        console.error(error);
        throw error;
    });
};