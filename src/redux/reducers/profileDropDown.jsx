import { ActionTypes, ProfileViews, ProfileVisibility } from '../actions'

const initialState = {
    selected: null,
    visibility: ProfileVisibility.DISPLAYED,
    view: ProfileViews.MENU,
    
};

// todo change to something common

const CHANGE_PASSWORD = 'changePassword';

const profileDropDown = (state = initialState, action) => {
    console.log('dropdown', state)
    switch(action.type) {
        case ActionTypes.TOGGLE_PROFILE: break;
        case ActionTypes.SET_PROFILE_VIEW :
            return {
                view: state.view,
                ...state
            };

        case ActionTypes.SELECT_PROFILE_ITEM :
        

            return {
                selected : state.item,
                ...state
            };
            
        

        default : return state;
    }
}

export default profileDropDown;