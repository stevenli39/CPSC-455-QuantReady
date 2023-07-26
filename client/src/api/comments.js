import axios from "axios"

export const fetchCommentsByQuestionID = async (questionID) => {
    try {
        const response = await axios.get(`http://localhost:3001/comments/${questionID}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const postComment = async (commentData) => {
    try {
        const response = await axios.post(`http://localhost:3001/comments`, commentData);
        return response.data;
    } catch (error) {
        throw error;
    }
};
