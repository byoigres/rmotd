import { h, render, Component } from 'preact';

import styles from 'styles';
const SquareGrid = () => (
  <div className={styles['square-grid']}>
    {/*Array(1444).fill().map((_,i) => <div data-key={`minute-${i+1}`} key={`minute-${i}`} className={styles['square-grid-square']} />)*/}
    <svg width="100%" height="100%" viewBox="0,0,100%,100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <pattern id="smallGrid" width="1.388888888888889%" height="5%" patternUnits="userSpaceOnUse">
                <path fill="#2e99e5" d="M0 0h960v960H0z" stroke="gray" stroke-width="0.5"/>
            </pattern>
            <pattern id="grid" width="8.333333333333333%" height="50%" patternUnits="userSpaceOnUse">
                <rect width="100%" height="100%" fill="url(#smallGrid)"/>
                <path fill="none" d="M0 0h960v960H0z" stroke="gray" stroke-width="2" />
            </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  </div>
);

SquareGrid.displayName = "SquareGrid";

export default SquareGrid;
