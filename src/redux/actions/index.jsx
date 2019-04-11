/*
 * action types
 */

export const ActionTypes = {
    ADD_TODO : 'ADD_TODO',
    TOGGLE_TODO : 'TOGGLE_TODO',
    SET_VISIBILITY_FILTER : 'SET_VISIBILITY_FILTER',

    // dropdown actions
    TOGGLE_PROFILE: 'TOGGLE_PROFILE',
    SET_PROFILE_VIEW: 'SET_PROFILE_VIEW',
    SELECT_PROFILE_ITEM: 'SELECT_PROFILE_ITEM'
};

/*
 * enums
 */

export const VisibilityFilters = {
    ALL : 'ALL',
    COMPLETED : 'COMPLETED',
    ACTIVE: 'ACTIVE'
};

export const ProfileViews = {
    MENU: 'MENU',
    CHANGE_PASSWORD_FORM : 'CHANGE_PASSWORD_FORM'
}

export const ProfileVisibility = {
    HIDDEN: 'HIDDEN',
    DISPLAYED: 'DISPLAYED'
}

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

export const toggleProfileVisibility = (visibility) => {
    return { type: ActionTypes.TOGGLE_PROFILE, visibility }
};

export const setProfileView = (view) => {
    return { type: ActionTypes.SET_PROFILE_VIEW, view }
};

export const selectProfileItem = (item) => {
    return { type: ActionTypes.SELECT_PROFILE_ITEM, item }
};