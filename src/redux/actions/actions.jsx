import { ViewFilters, MenuViewFilters } from '../../constants'

// types
export const CLOSE_DROPDOWN = 'CLOSE_DROPDOWN'
export const TOGGLE_DROPDOWN = 'TOGGLE_DROPDOWN'
export const SET_VIEW_FILTER = 'SET_VIEW_FILTER'

export const SELECT_MENU_ITEM = 'SELECT_MENU_ITEM'
export const SET_MENU_VIEW_FILTER = 'SET_MENU_VIEW_FILTER'

export const SET_CHANGE_PASSWORD_VIEW_FILTER = 'SET_CHANGE_PASSWORD_VIEW_FILTER'
export const RESET_CHANGE_PASSWORD_FORM = 'RESET_CHANGE_PASSWORD_FORM'

export const CHANGE_PASSWORD_SENT = 'CHANGE_PASSWORD_SENT'
export const CHANGE_PASSWORD_FAILED = 'CHANGE_PASSWORD_FAILED'
export const CHANGE_PASSWORD_SUCCESS = 'CHANGE_PASSWORD_SUCCESS'

// creators
export const toggleDropdown = ( isVisible = false ) => ({
    type: TOGGLE_DROPDOWN,
    isVisible
})

export const setViewFilter = ( filter = ViewFilters.SHOW_MENU ) => ({
    type: SET_VIEW_FILTER,
    filter
})

export const selectMenutItem = (item) => ({
    type: SELECT_MENU_ITEM,
    item
})

export const setMenuViewFilter = ( filter = MenuViewFilters.SHOW_DEFAULT ) => ({
    type: SET_MENU_VIEW_FILTER,
    filter
})

export const setChangePasswordViewFilter = ( filter = MenuViewFilters.SHOW_DEFAULT ) => ({
    type: SET_CHANGE_PASSWORD_VIEW_FILTER,
    filter
})

export const resetChangePasswordForm = () => ({
    type: RESET_CHANGE_PASSWORD_FORM
})

// sync actions
export const changePasswordSent = () => ({
    type: CHANGE_PASSWORD_SENT
})

export const changePasswordFailed = (error) => ({
    type: CHANGE_PASSWORD_FAILED,
    error
})

export const changePasswordSuccess = () => ({
    type: CHANGE_PASSWORD_SUCCESS
})

export function selectItem() {
    // @todo must use Promise to resolve request
    return selectMenutItem
}

// async action creator
export function changePassword(oldPasssword, newPassword) { 
    console.log('attempt to change pw', oldPasssword, newPassword)
    return async (dispatch, getState) => {
        console.log(dispatch, getState)
        try {
            dispatch(changePasswordSuccess());
        } catch(error) {
            dispatch(changePasswordFailed(error));
        }
      
          return 'done';
    }
}

export function closeDropdown() {
    // use thunk
    // @todo must dispatch action to reset Menu View and Passwod View
    
}

