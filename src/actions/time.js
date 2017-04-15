import * as constants from '../constants';

/* eslint import/prefer-default-export: 0*/
export function updateTime() {
  return {
    type: constants.UPDATE_TIME,
  };
}
