import * as constants from '../constants';

export function changeLanguage(language, locale) {
  return {
    type: constants.CHANGE_LANGUAGE,
    language,
    locale,
  };
}
