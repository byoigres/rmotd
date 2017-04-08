import { h } from 'preact';
import styles from 'styles';

const Navbar = () => (
    <div className={styles.navbar}>
        <div className={styles['navbar-logo']}>Minutes</div>
    </div>
);

Navbar.displayName = "Navbar";

export default Navbar;
