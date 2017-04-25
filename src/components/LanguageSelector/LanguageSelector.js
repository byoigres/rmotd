/* eslint jsx-a11y/no-static-element-interactions: 0 */
import React from 'react';
import styles from './styles';

const LanguageSelector = ({ languages, onChangeLanguage }) => (
  <div className={styles['language-selector']}>
    {
      languages.map(lang => (
        <span
          key={lang.id}
          onClick={() => onChangeLanguage(lang.id, lang.locale)}
        >
          {lang.text}
        </span>
      ))
    }
  </div>
);

LanguageSelector.displayName = 'LanguageSelector';

export default LanguageSelector;
