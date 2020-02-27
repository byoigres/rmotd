import React from 'react';
import { FormattedMessage } from 'react-intl';
// import styles from './styles';
import styled from 'styled-components';
import Navbar from '../components/Navbar';

const FullPageLayout = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  flex: 1 0 auto;

  /* ScrollToTop */
  height: 100%;
  width: 100%;
  position: relative;
`;

const Wrapper = ({ children }) => (
  <FullPageLayout>
    <Navbar brandText={<FormattedMessage id="app.brand-text" />} />
    {children}
  </FullPageLayout>
);

export default Wrapper;
