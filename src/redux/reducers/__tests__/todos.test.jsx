import { addTodo } from '../../actions' 
import reducer from '../todos';


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
                    text: 'Run Tests',
                    completed: false
                },
                {
                    text: 'Use Redux',
                    completed: false
                },
            ]);
    });
})