import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { combineReducers } from 'redux';

import logBuilder from './logbuilder';
import dates from './dateselector';
import chart from './chart';

const rootReducer = combineReducers({
  logBuilder,
  dates,
  chart
});

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware
  )
);

export default store;
