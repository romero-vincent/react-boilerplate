import React from 'react'
import { mount, render, shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import StrictTextfield from '../index';

describe('StrictTextfield', () => {
    // 1. Snapshot
    // 2. Test Props
    // 3. DataTypes
    // 4. Conditionals / Branches
    let Component;

    it('renders correctly', () => {
        Component = render(<StrictTextfield name="zoo" />);
        expect(Component).toMatchSnapshot();
    });

    it('requires name (prop), but has default props', () => {
        Component = shallow(<StrictTextfield name="foo" />);
        const Props = Component.instance().props;
        expect(typeof Props.name).toBe('string');
        expect(Array.isArray(Props.validators)).toBeTruthy();
    });

    it('validates', () => {
        Component = shallow(<StrictTextfield name="foo" value="hello" />);
        expect(Component.instance().state['value']).toEqual('hello');
    });
    //
    // it('validates', () => {
    //     Component = mount(<StrictTextfield name="foo" />);
    //     expect(Component.instance().validate()).toBeTruthy();
    // });

    // PasswordFormComponent.simulate('submit');
    // expect(mockSubmitFunction.mock.calls.length).toBe(1);

})