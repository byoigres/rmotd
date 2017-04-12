import { h, render, Component } from 'preact';
import styles from 'styles';

const changeLanguage = (language) => {
  localStorage.setItem('__minutes_display_locale__', language);
  window.location.reload();
};

const changeToEnglish = () => changeLanguage('en');
const changeToSpanish = () => changeLanguage('es');


const currentLanguage = localStorage.getItem('__minutes_display_locale__') || 'en';

const LanguageSelector = ({ languages }) => (
  <div className={styles['language-selector']}>
    <span onClick={changeToSpanish}>Español</span>
    {' | '}
    <span onClick={changeToEnglish}>Ingles</span>
  </div>
);

LanguageSelector.displayName = 'LanguageSelector';

export default LanguageSelector;
