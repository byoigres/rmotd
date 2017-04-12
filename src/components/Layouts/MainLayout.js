import { h } from 'preact';
import { FormattedMessage } from 'react-intl';
import styles from 'styles';
import Navbar from '../Navbar';
import Footer from '../Footer';

const MainLayout = ({ children }) => (
  <div className={styles['main-layout']}>
    <Navbar brandText={<FormattedMessage id="app.brand-text" />} />
    <div className={styles.container}>
      {children}
    </div>
    <Footer />
  </div>
);

export default MainLayout;
