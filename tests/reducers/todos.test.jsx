import reducer from '../../src/reducers/todos';
import { addTodo } from '../../src/actions';

describe('todos reducer', () => {
    it('should return initial state', () => {
        const expectedState = [];
        expect(reducer(undefined, {})).toEqual(expectedState);
    });

    it('should handle add todo/s', () => {
        let initialState = [];
        let expectedState = [
            {
                text: 'Run Tests',
                completed: false
            }
        ];
        expect(reducer(initialState, addTodo('Run Tests'))).toEqual(expectedState);

        initialState = [
            {
                text: 'Use Redux',
                completed: false
            }
        ];
        expect(reducer(initialState, addTodo('Run Tests')))
            .toEqual([
                {
                    text: 'Use Redux',
                    completed: false
                },
                {
                    text: 'Run Tests',
                    completed: false
                }
            ]);
    });
})