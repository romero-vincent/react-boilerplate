import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/App'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './redux/reducers'

import './fonts/style.css'

import loggerMiddleware from './redux/middleware/logger'
import thunkMiddleware from './redux/middleware/thunk'

window.$store = createStore(rootReducer, applyMiddleware(thunkMiddleware, loggerMiddleware));

ReactDOM.render(
    <Provider store={window.$store}>
        <App />
    </Provider>, document.getElementById('app'));