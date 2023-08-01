import axios from "../../api/axiosConfig";

const FETCH_USER = "FETCH_USER";
const LOGOUT_USER = "LOGOUT_USER";

const fetchUser = () => {
    return function(dispatch) {
        axios.get("/api/current_user")
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
        axios.get("/api/logout")
            .then(res => {
                dispatch({
                type: LOGOUT_USER,
                payload: res
        })
    });
    }
};

export { fetchUser, logoutUser, FETCH_USER, LOGOUT_USER};