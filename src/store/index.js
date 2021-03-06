import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { callAPI, loading } from './middlewares';
import * as moduleReducers from './modules';

// https://github.com/zalmoxisus/redux-devtools-extension
export default createStore(
  combineReducers(moduleReducers),
  composeWithDevTools(applyMiddleware(callAPI, loading)),
);
