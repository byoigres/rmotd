import React from 'react';
import { FormattedHTMLMessage } from 'react-intl';
import styles from './styles';
import LanguageSelector from '../LanguageSelector';

const Footer = () => (
  <div className={styles.footer}>
    <div className={styles['footer-container']}>
      <FormattedHTMLMessage id="app.footer.text" />
      <LanguageSelector />
    </div>
  </div>
);

Footer.displayName = 'Footer';

export default Footer;
