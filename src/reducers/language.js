import * as constants from '../constants';

const getLocale = () => {
  const navigatorLang = navigator.language.split('-')[0];

  if (navigatorLang === constants.LOCALE_EN ||
      navigatorLang === constants.LOCALE_ES) {
    return navigatorLang;
  }

  return constants.LOCALE_EN;
};

const defaultLocale = localStorage.getItem(constants.LOCAL_STORAGE_LOCALE_KEY) || getLocale();

const initialState = {
  selected: defaultLocale,
  locale: constants.LOCALE_EN,
};

export default (state = initialState, action) => {
  if (action.type === constants.CHANGE_LANGUAGE) {
    const { language, locale } = action;

    localStorage.setItem(constants.LOCAL_STORAGE_LOCALE_KEY, locale);

    return Object.assign({}, state, {
      selected: language,
      locale,
    });
  }

  return state;
};
