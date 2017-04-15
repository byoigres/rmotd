import { h } from 'preact';
import { FormattedMessage } from 'react-intl';
import styles from './styles';
import Navbar from '../../components/Navbar';

const FullPageLayout = ({ children }) => (
  <div className={styles['full-page-layout']}>
    <Navbar brandText={<FormattedMessage id="app.brand-text" />} />
    {children}
  </div>
);

export default FullPageLayout;
