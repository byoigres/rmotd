import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';

import time from './time';
import language from './language';

export default function reducers() {
  return combineReducers({
    routing,
    time,
    language,
  });
}
