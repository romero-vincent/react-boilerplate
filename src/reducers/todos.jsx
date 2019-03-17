import { ActionTypes } from '../../src/actions';

const todos = (state = [], action) => {
    switch(action.type) {
        case ActionTypes.ADD_TODO:
            return [
                ...state,
                {
                    text: action.text,
                    completed: false
                }
            ];

        case ActionTypes.TOGGLE_TODO:
            return state.map((todo, index) => {
                if (index === action.index) {
                    return Object.assign({}, todo, {
                        completed: !todo.completed
                    });
                }
            });

        default:
            return state;
    }
};

export default todos;