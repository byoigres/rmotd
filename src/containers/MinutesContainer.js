import { h, Component } from 'preact';
import {
    startOfDay,
    differenceInMinutes
} from 'date-fns';
import styles from '../styles';
import MinutesCounter from '../components/MinutesCounter.js';
import FloatingButton from '../components/FloatingButton.js';

const round = (value, decimals) => Number(Math.round(`${value}e${decimals}`)+`e-${decimals}`);
const formatNumber = number => Intl.NumberFormat().format(number);

class MinutesContainer extends Component {
    constructor() {
        super();
        this.midnightDate = startOfDay(new Date());
        this.totalMinutes = 1440;
        this.state = { 
            time: Date.now(),
        };
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState({
                time: Date.now()
            });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render(props, state) {
        const currentTime = new Date(state.time).toLocaleTimeString();
        const diffMinutes = differenceInMinutes(new Date(), this.midnightDate);
        const remainingMinutes = this.totalMinutes - diffMinutes;

        return (
            <div className={styles['minutes-container']}>  
              <h1 className={styles.header}>
                  Remaining Minutes of the Day
              </h1>
              <blockquote>
                  We all have the exact same 1440 minutes per day.
                  You don’t get more or less than Mother Teresa, Leonardo Da Vinci, Steve Jobs, or Martin Luther King Jr.
                  Use it wisely.
              </blockquote>
              <MinutesCounter>{ formatNumber(remainingMinutes) }</MinutesCounter>
              <p className={styles['minutes-description']}>
                  minutes left of the day
              </p>
              {/*
              <p>
                  <strong>{ formatNumber(diffMinutes) }</strong> minutes have been passed
              </p>
              <p>
                  There are still <strong>{ round(remainingMinutes * 100 / this.totalMinutes, 2) }%</strong> of the day left
              </p>
              <p>
                  { currentTime }
              </p>
              */}
            </div>
        );
    }
}

MinutesContainer.displayName = "MinutesContainer";

export default MinutesContainer;