/* eslint jsx-a11y/no-static-element-interactions: 0 */
import React from 'react';
import styles from './styles';

const changeLanguage = (language) => {
  localStorage.setItem('__minutes_display_locale__', language);
  window.location.reload();
};

const changeToEnglish = () => changeLanguage('en');
const changeToSpanish = () => changeLanguage('es');

const LanguageSelector = () => (
  <div className={styles['language-selector']}>
    <span onClick={changeToSpanish}>Español</span>
    {' | '}
    <span onClick={changeToEnglish}>Ingles</span>
  </div>
);

LanguageSelector.displayName = 'LanguageSelector';

export default LanguageSelector;
