import { h, render, Component } from 'preact';
import styles from 'styles';

const SquareGrid = ({ remainingMinutes, remainingSeconds }) => {
    const fillPatter = (remainingMinutes, remainingSeconds, x, y) => {
        const currentMinute = 1440 - ((y * 72) + (x + 1));
        
        if (currentMinute === remainingMinutes) {
            /*
            console.log(currentMinute, remainingMinutes);
            console.log('remainingSeconds', remainingSeconds);
            */
            return 'url(#Progress)';
        } else if (currentMinute < remainingMinutes) {
            return 'none';
        } else {
            return '#2196f3';
        }
        (1440 - ((j * 72) + (x + 1))) < remainingMinutes ? 'none' : 'url(#Progress)' /*'#2196f3'*/
    };

    return (
        <div className={styles['square-grid']}>
            <svg
                width="100%"
                height="100%"
                viewBox="0 0 72 20"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="Progress" x1="0" x2="0" y1="0" y2="1">
                        <stop offset={`${(remainingSeconds * 100) / 60 }%`} stop-color="#2196f3"/>
                        <stop offset={`${(remainingSeconds * 100) / 60 }%`} stop-color="transparent"/>
                    </linearGradient>
                </defs>
                {
                Array(20).fill().map((_, i) => (
                    Array(72).fill().map((__, j) => (
                    <path
                        fill={fillPatter(remainingMinutes, remainingSeconds, j, i)/*(1440 - ((i * 72) + (j + 1))) < remainingMinutes ? 'none' : 'url(#Progress)' /*'#2196f3'*/}
                        d={`M${j} ${i}h1v1H${j}z`}
                        stroke="gray"
                        stroke-width="0.01"
                    />
                    ))
                ))
                }
            </svg>
        </div>
    );
};

SquareGrid.displayName = "SquareGrid";

export default SquareGrid;
