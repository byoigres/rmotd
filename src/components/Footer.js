import { h, Component } from 'preact';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import styles from 'styles';

const Footer = () => (
  <div className={styles.footer}>
    <div className={styles['footer-container']}>
      <FormattedMessage id="app.footer.text" />
      <select>
        <option selected="selected">English</option>
        <option>Spanish</option>
      </select>
    </div>
  </div>
);

Footer.displayName = 'Footer';

export default Footer;
