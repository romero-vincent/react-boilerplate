import { ActionTypes, VisibilityFilters,
    addTodo, toggleTodo, setVisibilityFilter } from '../../actions'

describe('actions', () => {
    it('should create an action to add a todo', () => {
        const text = 'Finished docs';
        const expectedAction = {
            type: ActionTypes.ADD_TODO,
            text
        };
        expect(addTodo(text)).toEqual(expectedAction);
    });

    it('should create an action to toggle a todo', () => {
        const index = 0;
        const expectedAction = {
            type: ActionTypes.TOGGLE_TODO,
            index
        };
        expect(toggleTodo(index)).toEqual(expectedAction);
    });

    it('should create an action to filter todo list', () => {
        const filter = VisibilityFilters.ACTIVE;
        const expectedAction = {
            type: ActionTypes.SET_VISIBILITY_FILTER,
            filter
        };
        expect(setVisibilityFilter(filter)).toEqual(expectedAction);
    });
});