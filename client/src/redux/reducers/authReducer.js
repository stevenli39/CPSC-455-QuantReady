import { FETCH_USER, LOGOUT_USER, UPDATE_USER } from "../actions/authActions";

export default function authReducer(state = null, action) {
    switch (action.type) {
        case FETCH_USER:
            return {
                ...state,
                user: action.payload.data || false,
            };
        case LOGOUT_USER:
            return {
                ...state,
                user: null,
            };
        case UPDATE_USER:
            return {
                ...state,
                user: action.payload.data || false,
            };
        default:
            return state;
    }
}