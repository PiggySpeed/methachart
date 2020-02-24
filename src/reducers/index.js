import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { combineReducers } from 'redux';

import LogBuilder from './logbuilder';
import dates from './dateselector';
import printData from './print';

const rootReducer = combineReducers({
  LogBuilder,
  dates,
  printData
});

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware
  )
);

export default store;
