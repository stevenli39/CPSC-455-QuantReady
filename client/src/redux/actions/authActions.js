import axiosInstance from "../../api/axiosConfig";

const FETCH_USER = "FETCH_USER";
const LOGOUT_USER = "LOGOUT_USER";

const fetchUser = () => {
    return function(dispatch) {
        axiosInstance.get("/api/current_user")
            .then(res => {
                dispatch({
                type: FETCH_USER,
                payload: res
                })
            }).catch(err => {
                console.log(err);
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

export { fetchUser, logoutUser, FETCH_USER, LOGOUT_USER};