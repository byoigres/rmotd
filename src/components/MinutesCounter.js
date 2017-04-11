import { h, render, Component } from 'preact';

import styles from 'styles';

const formatNumber = number => Intl.NumberFormat().format(number);

const MinutesCounter = ({ remainingMinutes }) => (
  <div className={styles['minutes-counter']}>
    {formatNumber(remainingMinutes)}
  </div>
);

MinutesCounter.displayName = 'MinutesCounter';

export default MinutesCounter;
