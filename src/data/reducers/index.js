import {combineReducers} from 'redux'
import courses from './courses';
import users from './users';
import activeUser from './activeUser'

export default combineReducers({courses,users,activeUser});
