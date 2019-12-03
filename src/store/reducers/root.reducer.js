import { combineReducers } from 'redux';
import userReducer from './user.reducer';

const INITIAL_STATE = {
  current: []
};

export const rootReducer = combineReducers({
    user: userReducer
});
