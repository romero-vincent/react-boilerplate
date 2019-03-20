import { ActionTypes } from '../actions'

const todos = (state = [], action) => {
    switch(action.type) {
        case ActionTypes.ADD_TODO:
            return [
                {
                    text: action.text,
                    completed: false
                },
                ...state
            ];

        case ActionTypes.TOGGLE_TODO:
            return state.map((t, idx) => {
                if (idx !== action.index) {
                    return t
                }
                return {
                    ...t,
                    completed: !t.completed,
                };
            });

        default:
            return state;
    }
};

export default todos;