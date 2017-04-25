import * as constants from '../constants';

/* eslint import/prefer-default-export: 0*/
export function changeLanguage(language, locale) {
  return {
    type: constants.CHANGE_LANGUAGE,
    language,
    locale,
  };
}
