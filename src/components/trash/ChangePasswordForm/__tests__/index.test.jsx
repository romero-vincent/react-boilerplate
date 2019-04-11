import React from 'react'
import { mount, render} from 'enzyme'

import ChangePasswordForm from '../index';

describe('ChangePasswordForm', () => {
    // 1. Snapshot
    // 2. Test Props
    // 3. Test Events
    it ('renders correctly', () => {
        const PasswordFormComponent = render(<ChangePasswordForm />);
        expect(PasswordFormComponent).toMatchSnapshot();
    })

    it ('checks the onSubmit event', () => {
        const mockSubmitFunction = jest.fn();
        const PasswordFormComponent = mount(<ChangePasswordForm onSubmit={mockSubmitFunction} />);
        // mount/render/shallow when applicable

        PasswordFormComponent.simulate('submit');
        expect(mockSubmitFunction.mock.calls.length).toBe(1);
    })
})
