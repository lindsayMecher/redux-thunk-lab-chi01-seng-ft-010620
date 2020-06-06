import React from 'react';
import ReactDOM from 'react-dom'
import App from './App'
import { catsReducer } from './reducers/catsReducer';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'

const store = createStore(catsReducer, applyMiddleware(thunk))


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// https://learn-co-curriculum.github.io/cat-api/cats.json