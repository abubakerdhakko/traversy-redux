import { USER_LOADED, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL } from './types';
import axios from 'axios';
import setAuthToken from '../utilties/setAuthToken'

// Register User
// const register = async formData => {
//   const config = {
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   };

//   try {
//     const res = await axios.post('/api/users', formData, config);

//     dispatch({
//       type: REGISTER_SUCCESS,
//       payload: res.data
//     });

//     loadUser();
//   } catch (err) {
//     dispatch({
//       type: REGISTER_FAIL,
//       payload: err.response.data.msg
//     });
//   }
// };


// Load User
export const loadUser = async (dispatch) => {
  setAuthToken(localStorage.token);

  try {
    const res = await axios.get('http://localhost:5000/api/auth');

    dispatch({
      type: USER_LOADED,
      payload: res.data
    });
  } catch (err) {
    dispatch({ type: AUTH_ERROR });
  }
};


// Login User
export const loginAction = async (dispatch, formData) => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const res = await axios.post('http://localhost:5000/api/auth', formData, config);
    console.log('logonAction')
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });

    loadUser();
  } catch (err) {
    dispatch({
      type: LOGIN_FAIL,
      payload: err.response.data.msg
    });
  }
};



