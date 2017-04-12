import { h, Component } from 'preact';
import { Link } from 'react-router-dom';
import { FormattedHTMLMessage } from 'react-intl';
import styles from 'styles';

const Footer = () => (
  <div className={styles.footer}>
    <div className={styles['footer-container']}>
      <FormattedHTMLMessage id="app.footer.text" />
    </div>
  </div>
);

Footer.displayName = 'Footer';

export default Footer;
