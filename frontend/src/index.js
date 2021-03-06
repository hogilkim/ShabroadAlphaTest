import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'; //track redux's "store"
import { createStore, applyMiddleware } from 'redux'; //compose
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import {reducers} from './ReduxModules/index';

import App from './App';

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));