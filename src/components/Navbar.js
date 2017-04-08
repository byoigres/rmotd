import { h } from 'preact';
import styles from 'styles';

const Navbar = () => (
  <div className={styles.navbar}>
    <div className={styles['navbar-container']}>
      <div className={styles['navbar-brand']}>
        <a href="/minutes">Minutes</a>
      </div>
      <div className="navbar-list">
        <a href="/" className="navbar-item">What is this?</a>
        <a href="/" className="navbar-item">About</a>
      </div>
    </div>
  </div>
);

Navbar.displayName = 'Navbar';

export default Navbar;
