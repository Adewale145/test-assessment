import { LOGIN_SUCCESS } from "../actions/authActions";

const initialState = {
    loggedIn: false,
    userData: null,
};

const authReducer = (state = initialState, action) => {
    if (action.type === LOGIN_SUCCESS) {
        return {
            ...state,
            loggedIn: true,
            userData: action.payload,
        };
    } else {
        return state;
    }
};

export default authReducer;