import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { combineReducers } from 'redux';

import chart from './chart';

const reducer = combineReducers({
  chart
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(
    thunkMiddleware
  ))
);

export default store;
