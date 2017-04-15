import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';

import time from './time';

export default function reducers() {
  return combineReducers({
    routing,
    time,
  });
}
