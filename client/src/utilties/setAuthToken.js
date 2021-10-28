import axios from 'axios';

const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common['x-auth-token'] = token;
    console.log('setAuthToken OK')
  } else {
    console.log('setAuthToken NO')
    delete axios.defaults.headers.common['x-auth-token'];
  }
};

export default setAuthToken;
