import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { combineReducers } from 'redux';

import chart from './chart';

const rootReducer = combineReducers({
  chart
});

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware
  )
);

export default store;
