import React from 'react'
import { storiesOf } from '@storybook/react'
import centered from '@storybook/addon-centered'


import TodoList from '../TodoList'

import { Provider } from 'react-redux' 
import { createStore, applyMiddleware, combineReducers } from 'redux'
import loggerMiddleware from '../../redux/middleware/logger'
import reducer from '../../redux/reducers/todos'

const store = createStore(reducer, { todos: [{ text: 'hi', completed: false } ]}, applyMiddleware(loggerMiddleware));

const withProvider = (story) => (
    <Provider store={store}>
      { story() }
    </Provider>
  )

storiesOf('TodoList', module)
    .addDecorator(centered)
    .addDecorator(withProvider)
    .add('With sample list', () => (
        <TodoList />
    ))