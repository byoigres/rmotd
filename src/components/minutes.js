import { h, render, Component } from 'preact';

import styles from 'styles';

const Minutes = ({ children }) => (
  <div className={styles.minutes}>
    {children}
  </div>
);

Minutes.displayName = "Minutes";

export default Minutes;