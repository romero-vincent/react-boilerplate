import { ActionTypes, VisibilityFilters } from '../actions';

const visibilityFilter = (state = VisibilityFilters.ALL, action) => {
    switch(action.type) {
        case ActionTypes.SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state;
    }
};

export default visibilityFilter;