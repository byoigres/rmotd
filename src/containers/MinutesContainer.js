import { h, Component } from 'preact';
import styles from '../styles';
import MinutesCounter from '../components/MinutesCounter.js';
import FloatingButton from '../components/FloatingButton.js';
import SquareGrid from '../components/SquareGrid.js';

const round = (value, decimals) => Number(Math.round(`${value}e${decimals}`)+`e-${decimals}`);
const formatNumber = number => Intl.NumberFormat().format(number);

class MinutesContainer extends Component {
    constructor() {
        super();
        this.totalMinutes = 1440;
        const currentDate = new Date();
        const elapsedMinutes = (currentDate.getHours() * 60) + currentDate.getMinutes();
        const remainingMinutes = this.totalMinutes - elapsedMinutes;
        this.state = {
            remainingMinutes
        };
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            const currentDate = new Date();
            const elapsedMinutes = (currentDate.getHours() * 60) + currentDate.getMinutes();
            const remainingMinutes = this.totalMinutes - elapsedMinutes;

            this.setState({
                remainingMinutes
            });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render(props, state) {
        return (
            <div className={styles['minutes-container']}>
              <SquareGrid remainingMinutes={this.state.remainingMinutes} />
              <h1 className={styles.header}>
                  Remaining Minutes of the Day
              </h1>
              <blockquote>
                  We all have the exact same 1440 minutes per day.
                  You don’t get more or less than Mother Teresa, Leonardo Da Vinci, Steve Jobs, or Martin Luther King Jr.
                  Use it wisely.
              </blockquote>
              <MinutesCounter>{ formatNumber(this.state.remainingMinutes) }</MinutesCounter>
              <p className={styles['minutes-description']}>
                  minutes left of the day
              </p>
            </div>
        );
    }
}

MinutesContainer.displayName = "MinutesContainer";

export default MinutesContainer;
