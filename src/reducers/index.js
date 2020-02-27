import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import time from './time';
import language from './language';

export default (history) => combineReducers({
  router: connectRouter(history),
  time,
  language
});
