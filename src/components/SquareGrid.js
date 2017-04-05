import { h, render, Component } from 'preact';

import styles from 'styles';
const SquareGrid = ({ remainingMinutes }) => (
  <div className={styles['square-grid']}>

    <svg
        width="100%"
        height="100%"
        viewBox="0 0 72 20"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg">
        {
          Array(20).fill().map((_, i) => (
            Array(72).fill().map((__, j) => (
              <path
                  fill={(1440 - ((i * 72) + (j + 1))) < remainingMinutes ? 'none' : '#2196f3'}
                  d={`M${j} ${i}h1v1H${j}z`}
                  stroke="gray"
                  stroke-width="0.01"
              />
            ))
          ))
        }
        {/*
        {
            Array(12).fill().map((_,i) => {
                var increment = 6 * i;
                return (
                  <path
                    fill="none"
                    d={`M${increment} 0h6v10H${increment}z`}
                    stroke="gray"
                    stroke-width="0.1"
                  />
                );
            })
        }
        {
            Array(12).fill().map((_,i) => {
                var increment = 6 * i;
                return (
                  <path
                      fill="none"
                      d={`M${increment} 10h6v20H${increment}z`}
                      stroke="gray"
                      stroke-width="0.1"
                  />
                );
            })
        }
        */}
    </svg>

    {/*Array(1444).fill().map((_,i) => <div data-key={`minute-${i+1}`} key={`minute-${i}`} className={styles['square-grid-square']} />)*/}
    {/*
    <svg width="100%" height="100%" viewBox="0,0,100%,100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <pattern id="smallGrid" width="1.388888888888889%" height="5%" patternUnits="userSpaceOnUse">
                <path className={styles['square-path']} d="M0 0h960v960H0z" stroke="gray" stroke-width="0.5"/>
            </pattern>
            <pattern id="grid" width="8.333333333333333%" height="50%" patternUnits="userSpaceOnUse">
                <rect width="100%" height="100%" fill="url(#smallGrid)"/>
                <path fill="none" d="M0 0h960v960H0z" stroke="gray" stroke-width="2" />
            </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
    */}
  </div>
);

SquareGrid.displayName = "SquareGrid";

export default SquareGrid;
