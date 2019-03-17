import { VisibilityFilters } from '../../src/actions';
import rootReducer from '../../src/reducers';

describe('combined reducers', () => {
    it('should return initial state', () => {
        const expectedState = {
            todos: [],
            filter: VisibilityFilters.ALL
        };
        expect(rootReducer(undefined, {})).toEqual(expectedState);
    })
})