import { combineReducers } from 'redux';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  isUserLoggedIn:userReducer
});

export default rootReducer;