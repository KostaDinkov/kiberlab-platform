import {combineReducers} from 'redux'
import courses from './courses';
import users from './users';

export default combineReducers(courses,users);
