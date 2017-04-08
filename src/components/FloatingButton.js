import { h } from 'preact';
import styles from 'styles';

const FloatingButton = ({ children }) => (
  <div className={styles['floatig-button-container']}>
    <button className={styles['floatig-button']}>{children}</button>
  </div>
);

export default FloatingButton;
