import { h, render, Component } from 'preact';

import styles from 'styles';

const MinutesCounter = ({ children }) => (
  <div className={styles['minutes-counter']}>
    {children}
  </div>
);

MinutesCounter.displayName = 'MinutesCounter';

export default MinutesCounter;
