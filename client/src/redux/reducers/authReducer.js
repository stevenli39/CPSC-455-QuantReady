import { FETCH_USER, LOGOUT_USER } from "../actions/authActions";

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
        default:
            return state;
    }
}