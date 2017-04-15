import React from 'react';
import styles from './styles';

const Header = ({ text }) => (
  <h1 className={styles.header}>
    {text}
  </h1>
);

Header.displayName = 'Header';

export default Header;
