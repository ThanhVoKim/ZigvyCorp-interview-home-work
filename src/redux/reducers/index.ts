import { combineReducers } from 'redux';
import postsReducer from './posts/postsSlice';
import usersReducer from './users/usersSlice';

export const reducer = combineReducers({ postsReducer, usersReducer });
