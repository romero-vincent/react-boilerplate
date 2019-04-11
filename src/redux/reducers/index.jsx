import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';
import profileDropDown from './profileDropDown';


export default combineReducers({ todos, filter: visibilityFilter, profile: profileDropDown });