import React from 'react';
import { FormattedHTMLMessage } from 'react-intl';
import styles from './styles';

const Footer = ({ children }) => (
  <div className={styles.footer}>
    <div className={styles['footer-container']}>
      <FormattedHTMLMessage id="app.footer.text" />
      {children}
    </div>
  </div>
);

Footer.displayName = 'Footer';

export default Footer;
