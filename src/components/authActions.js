import axios from 'axios';

export const login = (username, password) => async (dispatch) => {
  try {
    const response = await axios.post('https://fakestoreapi.com/auth/login', {
      username,
      password,
    });

    console.log(response)

    // if (response.status === 200) {
    //   dispatch({ type: 'LOGIN_SUCCESS', payload: response.data });
    // } else {
    //   dispatch({ type: 'LOGIN_FAILURE', payload: 'Invalid username or password' });
    // }
  } catch (error) {
    console.error('Error:', error);
    dispatch({ type: 'LOGIN_FAILURE', payload: 'Failed to authenticate' });
  }
};
