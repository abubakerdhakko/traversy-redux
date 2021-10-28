import { combineReducers } from 'redux';
import postReducer from './postReducer';
import loginReducer from './authReducer';

export default combineReducers({
  posts: postReducer,
  auth:loginReducer
});
