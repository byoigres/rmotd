import { h } from 'preact';
import styles from './styles';

const SquareGrid = ({ remainingMinutes, remainingSeconds }) => {
  const fillPatter = (_remainingMinutes, row, column) => {
    const currentMinute = 1440 - ((column * 72) + (row + 1));

    if (currentMinute === _remainingMinutes) {
      return styles['square-grid-path-current-minute'];
    } else if (currentMinute < _remainingMinutes) {
      return styles['square-grid-path-available-minute'];
    }

    return styles['square-grid-path-passed-minute'];
  };

  return (
    <div className={styles['square-grid']}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 72 20"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="Progress" x1="0" x2="0" y1="0" y2="1">
            <stop className={styles['square-path-gradient-passed']} offset={`${(remainingSeconds * 100) / 60}%`} />
            <stop className={styles['square-path-gradient-available']} offset={`${(remainingSeconds * 100) / 60}%`} />
          </linearGradient>
        </defs>
        {
          Array(20).fill().map((_, column) => (
            Array(72).fill().map((__, row) => (
              <path
                className={`${styles['square-grid-path']} ${fillPatter(remainingMinutes, row, column)}`}
                d={`M${row} ${column}h1v1H${row}z`}
              />
            ))
          ))
        }
      </svg>
    </div>
  );
};

SquareGrid.displayName = 'SquareGrid';

export default SquareGrid;
