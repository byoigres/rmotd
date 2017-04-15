import { h } from 'preact';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import styles from './styles';

const Navbar = ({ brandText, isTransparent }) => (
  <div className={`${styles.navbar} ${isTransparent ? styles['navbar-transparent'] : ''}`}>
    <div className={styles['navbar-container']}>
      <div className={styles['navbar-brand']}>
        <Link to="/">{brandText}</Link>
      </div>
      <div className={styles['navbar-list']}>
        <Link to="/what-is-this" className={styles['navbar-item']}>
          <FormattedMessage id="app.menu.what-is-this" />
        </Link>
        <Link to="/about" className={styles['navbar-item']}>
          <FormattedMessage id="app.menu.about" />
        </Link>
      </div>
    </div>
  </div>
);

Navbar.displayName = 'Navbar';

export default Navbar;
