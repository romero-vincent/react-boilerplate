import React from 'react'
import { storiesOf } from '@storybook/react'
import centered from '@storybook/addon-centered'


import AddTodo from '../AddTodo'

import { Provider } from 'react-redux' 
import { createStore, applyMiddleware } from 'redux'
import loggerMiddleware from '../../redux/middleware/logger'

const reducer = (state, action) => {
    switch (action.type) {
        default: return state
    }
}

const store = createStore(reducer, applyMiddleware(loggerMiddleware));

const withProvider = (story) => (
    <Provider store={store}>
      { story() }
    </Provider>
  )

storiesOf('Todo', module)
    .addDecorator(centered)
    .addDecorator(withProvider)
    .add('Presentaional', () => (
        <AddTodo />
    ))