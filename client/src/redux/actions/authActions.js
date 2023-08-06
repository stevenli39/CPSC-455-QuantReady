import axiosInstance from "../../api/axiosConfig";

const FETCH_USER = "FETCH_USER";
const LOGOUT_USER = "LOGOUT_USER";
const UPDATE_USER = "UPDATE_USER"; 

const fetchUser = () => {
    return function(dispatch) {
        axiosInstance.get("/api/current_user")
            .then(res => {
                dispatch({
                type: FETCH_USER,
                payload: res
        })
    });
    }
};

const logoutUser = () => {
    return function(dispatch) {
        axiosInstance.get("/api/logout")
            .then(res => {
                dispatch({
                type: LOGOUT_USER,
                payload: res
        })
    });
    }
};

const updateUser = (userId, updatedUser) => {
    return function(dispatch) {
        axiosInstance.put(`/user/${userId}`, updatedUser)
            .then(res => {
                dispatch({
                type: UPDATE_USER,
                payload: res
        })
    });
    }
};


export { fetchUser, logoutUser, updateUser, FETCH_USER, LOGOUT_USER, UPDATE_USER};