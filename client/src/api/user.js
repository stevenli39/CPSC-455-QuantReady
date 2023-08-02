import axiosInstance from "./axiosConfig";

export const fetchQuestionHistory = (userId) => {
    return  axiosInstance.get(`/user/${userId}/questionHistory`)
        .then(response => response.data)
        .catch(error => {
        console.error(error);
        throw error;
    });
};

export const addQuestionToHistory = (userId, updatedUser) => {
    return axiosInstance.post(`/user/${userId}`, updatedUser)
      .then(response => response.data)
      .catch(error => {
        console.error(error);
        throw error;
    });
};