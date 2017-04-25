import React from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import styles from './styles';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LanguageSelector from '../../components/LanguageSelector';
import { changeLanguage as _changeLanguage } from '../../actions';
import * as constants from '../../constants';

const languages = [
  {
    id: constants.LANGUAGE_SPANISH,
    locale: 'es',
    text: <FormattedMessage id="language.spanish" />,
  },
  {
    id: constants.LANGUAGE_ENGLISH,
    locale: 'en',
    text: <FormattedMessage id="language.english" />,
  },
];

const MainLayout = ({ children, changeLanguage }) => (
  <div className={styles['main-layout']}>
    <Navbar brandText={<FormattedMessage id="app.brand-text" />} />
    <div className={styles.container}>
      {children}
    </div>
    <Footer>
      <LanguageSelector
        languages={languages}
        onChangeLanguage={changeLanguage}
      />
    </Footer>
  </div>
);

export default connect(state => ({
  selectedLanguage: state.language.selected,
}), {
  changeLanguage: _changeLanguage,
})(MainLayout);
