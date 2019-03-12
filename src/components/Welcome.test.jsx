import React from 'react'
import {shallow} from 'enzyme'

import Welcome from './Welcome.jsx';

test("Welcome component", () => {
    const wrapper = shallow(<Welcome />); // mount/render/shallow when applicable
    expect(wrapper.find('h1')).toExist();
    expect(wrapper.find('h1')).toHaveText('Hello, ');
});