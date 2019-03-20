/*
 * action types
 */

export const ActionTypes = {
    ADD_TODO : 'ADD_TODO',
    TOGGLE_TODO : 'TOGGLE_TODO',
    SET_VISIBILITY_FILTER : 'SET_VISIBILITY_FILTER'
};

/*
 * enums
 */

export const VisibilityFilters = {
    ALL : 'ALL',
    COMPLETED : 'COMPLETED',
    ACTIVE: 'ACTIVE'
};

/*
 * action creators
 */

export const addTodo = (text) => {
    return { type: ActionTypes.ADD_TODO, text }
};

export const toggleTodo = (index) => {
    return { type: ActionTypes.TOGGLE_TODO, index }
};

export const setVisibilityFilter = (filter) => {
    return { type: ActionTypes.SET_VISIBILITY_FILTER, filter }
};