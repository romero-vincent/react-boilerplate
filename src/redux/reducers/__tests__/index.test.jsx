import { VisibilityFilters } from '../../actions';
import rootReducer from '../index';

describe('combined reducers', () => {
    it('should return initial state', () => {
        const expectedState = {
            todos: [],
            filter: VisibilityFilters.ALL
        };
        expect(rootReducer(undefined, {})).toEqual(expectedState);
    })
})