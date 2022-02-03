import { USER_LOADED, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, Check_Error, REGISTER_SUCCESS, Check, REGISTER_FAIL } from './types';
import axios from 'axios';
import setAuthToken from '../utilties/setAuthToken'

// Register
export const registerActio = (formData) => {
  return function (dispatch) {
    console.log('here');
    dispatch({
      type: Check,
      payload: formData
    });
  }
}

export const registerAction = async (formData, dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  try {
    const res = await axios.post('http://localhost:5000/api/users', formData, config);
    console.log('res')
    dispatch({
      type: REGISTER_SUCCESS,
      payload: formData
    });
    // loadUser();
  } catch (err) {
    console.log('err', err.response)
    dispatch({
      type: REGISTER_FAIL,
      payload: err.response
    });
  }
};
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



