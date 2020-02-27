import React from 'react';
import styled from 'styled-components';

const GridContainer = styled.div`
  background-color: ${p => p.theme.primaryColor1};
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
  display: flex;
  flex-wrap: wrap;
  margin-top: 4rem; /** From Minutes.jsx */
  z-index: 5; /** From Minutes.jsx */
`;

const StopPassed = styled.stop`
  stop-color: ${p => p.theme.primaryColor2};
`;

const StopAvailable = styled.stop`
  stop-color: transparent;
`;

const Path = styled.path`
  stroke: ${p => p.theme.lightWhite};
  stroke-width: 0.01;

  fill: ${props => {
    const currentMinute = 1440 - ((props.column * 72) + (props.row + 1));

    if (currentMinute === props.remainingMinutes) {
      return 'url(#Progress)';
    } else if (currentMinute < props.remainingMinutes) {
      return 'none';
    }

    return props.theme.primaryColor2;
  }};
`;

const SquareGrid = ({ remainingMinutes, remainingSeconds }) => (
  <GridContainer>
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 72 20"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="Progress" x1="0" x2="0" y1="0" y2="1">
          <StopPassed offset={`${(remainingSeconds * 100) / 60}%`} />
          <StopAvailable offset={`${(remainingSeconds * 100) / 60}%`} />
        </linearGradient>
      </defs>
      {
        Array(20).fill().map((_, column) => (
          Array(72).fill().map((__, row) => (
            <Path
              key={`path-${column}-${row}`}
              remainingMinutes={remainingMinutes}
              row={row}
              column={column}
              d={`M${row} ${column}h1v1H${row}z`}
            />
          ))
        ))
      }
    </svg>
  </GridContainer>
);

SquareGrid.displayName = 'SquareGrid';

export default SquareGrid;
