import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';

import Welcome from './Welcome';

storiesOf('Welcome', module)
    .addDecorator(centered)
    .add('with name', () => (
        <Welcome name="React" />
    ))
    .add('with out name', () => (
        <Welcome />
    ));