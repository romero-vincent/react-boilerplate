import reducer from '../visibilityFilter';
import { ActionTypes, VisibilityFilters, setVisibilityFilter } from '../../actions';

describe('visibilityFilter reducer', () => {
    it('should return initial state', () => {
        const expectedState = VisibilityFilters.ALL;
        expect(reducer(undefined, {})).toEqual(expectedState);
    });

    it('should handle filter setting', () => {
        expect(reducer([], setVisibilityFilter(VisibilityFilters.ACTIVE)))
            .toEqual(VisibilityFilters.ACTIVE);

        expect(reducer([], setVisibilityFilter(VisibilityFilters.COMPLETED)))
            .toEqual(VisibilityFilters.COMPLETED);
    });
})