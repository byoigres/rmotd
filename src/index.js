import { h, render, Component } from 'preact';
import moment from 'moment';
import styles from './styles';
import Minutes from './components/minutes.js';

// Enable devtools. You can reduce the size of your app by only including this
// module in development builds. eg. In Webpack, wrap this with an `if (module.hot) {...}`
// check.
if (process.env.NODE_ENV !== "production") {
    require('preact/devtools');
}

const round = (value, decimals) => Number(Math.round(`${value}e${decimals}`)+`e-${decimals}`);
const formatNumber = number => Intl.NumberFormat().format(number);

class Clock extends Component {
    constructor() {
        super();
        this.momentAtMidnight = new moment().startOf('day');
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
        const diffMinutes = new moment().diff(this.momentAtMidnight, 'minutes');
        const remainingMinutes = this.totalMinutes - diffMinutes;
        
        return (
            <div className={styles.content}>
                <div className={styles['time-content']}>
                    <Minutes>{ formatNumber(remainingMinutes) }</Minutes>
                    <p>
                        minutes left of <strong>{ formatNumber(this.totalMinutes) }</strong>
                    </p>
                    <p>
                        <strong>{ formatNumber(diffMinutes) }</strong> minutes have been passed
                    </p>
                    <p>
                        There are still <strong>{ round(remainingMinutes * 100 / this.totalMinutes, 2) }%</strong> of the day left
                    </p>
                    <p>
                        { currentTime }
                    </p>
                </div>
            </div>
        );
    }
}

render(<Clock />, document.body);