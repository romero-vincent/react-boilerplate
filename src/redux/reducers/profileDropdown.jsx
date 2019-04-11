import {
    TOGGLE_DROPDOWN,
    SET_VIEW_FILTER,
    SET_MENU_VIEW_FILTER,
    SET_CHANGE_PASSWORD_VIEW_FILTER,
} from '../actions/actions'

const profileDropdown = (state = [], action) => {
    
    switch(action.type) {
        case TOGGLE_DROPDOWN : 
            return {
                ...state,
                isVisible : action.isVisible
            };

        case SET_VIEW_FILTER:
            return {
                ...state,
                view: action.filter
            };

        case SET_MENU_VIEW_FILTER:
            return {
                ...state,
                menuView: action.filter
            };

        case SET_CHANGE_PASSWORD_VIEW_FILTER:
            return {
                ...state,
                changePasswordView: action.filter
            };

        default:
            return state;
    }
};

export default profileDropdown;
// DropDown : {
//     view 
//     isVisible
// }

// Menu: {
//     view
//     isVisible
// }

// ChangePassword: {
//     view
//     isVisible
//     error
// }