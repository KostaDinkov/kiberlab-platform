import {combineReducers} from 'redux'
import courses from './courses';
import users from './users';
import activeUser from './activeUser';
import achievements from './achievements';

export default combineReducers({courses,users,activeUser,achievements});
