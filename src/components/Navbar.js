import { h } from 'preact';
import { Link } from 'react-router-dom';
import styles from 'styles';


const Navbar = ({ isTransparent }) => (
  <div className={`${styles.navbar} ${isTransparent ? styles['navbar-transparent'] : ''}`}>
    <div className={styles['navbar-container']}>
      <div className={styles['navbar-brand']}>
        <Link to="/">Minutes</Link>
      </div>
      <div className="navbar-list">
        <Link to="/what-is-this" className={styles['navbar-item']}>What is this?</Link>
        <Link to="/about" className={styles['navbar-item']}>About</Link>
      </div>
    </div>
  </div>
);

Navbar.displayName = 'Navbar';

export default Navbar;
