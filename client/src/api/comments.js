import axiosInstance from "./axiosConfig";

export const fetchCommentsByQuestionID = (questionID) => {
    return axiosInstance.get(`/comments/${questionID}`)
        .then(response => response.data)
        .catch(error => {
            console.error(error);
            throw error;
        });
};

export const postComment = (commentData) => {
    return axiosInstance.post(`/comments`, commentData)
        .then(response => response.data)
        .catch(error => {
            console.error(error);
            throw error;
        });
};

