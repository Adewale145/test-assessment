export const LOGIN_SUCCESS = "LOGIN_SUCCESS";

export const loginSuccess = (userData) => ({
    type: LOGIN_SUCCESS,
    payload: userData,
});