import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';
import profileDropdown from './profileDropdown';


export default combineReducers({ todos, filter: visibilityFilter, profileDropdown });