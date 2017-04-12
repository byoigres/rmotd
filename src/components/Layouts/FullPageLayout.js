import { h } from 'preact';
import styles from 'styles';
import Navbar from '../Navbar';

const FullPageLayout = ({ children }) => (
  <div className={styles['full-page-layout']}>
    <Navbar />
    {children}
  </div>
);

export default FullPageLayout;
