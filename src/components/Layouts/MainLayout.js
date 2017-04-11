import { h } from 'preact';
import styles form 'styles';
import Navbar from '../Navbar';

const MainLayout = ({ children }) => (
  <div className={styles['main-layout']}>
    <Navbar />
    <div className={styles['container']}>
      {children}
    </div>
  </div>
);

export default MainLayout;
