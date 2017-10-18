import { combineReducers, createStore, applyMiddleware } from 'redux';

import { client } from '@/service';
import { callAPI, loading } from './middlewares';
import * as moduleReducers from './modules';

export default createStore(
  combineReducers(moduleReducers),
  applyMiddleware(callAPI(client), loading),
);
