import { h, Component } from 'preact';
import styles from 'styles';
import MinutesCounter from '../components/MinutesCounter.js';
import FloatingButton from '../components/FloatingButton.js';
import SquareGrid from '../components/SquareGrid.js';
import Navbar from '../components/Navbar.js';

class MinutesContainer extends Component {
  constructor() {
    super();
    this.totalMinutes = 1440;

    const currentDate = new Date();
    const elapsedMinutes = (currentDate.getHours() * 60) + currentDate.getMinutes();
    const remainingSeconds = currentDate.getSeconds();
    const remainingMinutes = this.totalMinutes - elapsedMinutes;

    this.state = {
      remainingMinutes,
      remainingSeconds,
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      const currentDate = new Date();
      const elapsedMinutes = (currentDate.getHours() * 60) + currentDate.getMinutes();
      const remainingSeconds = currentDate.getSeconds();
      const remainingMinutes = this.totalMinutes - elapsedMinutes;

      this.setState({
        remainingMinutes,
        remainingSeconds,
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render(props, state) {
    return (
      <div className={styles['minutes-container']}>
        <Navbar />
        <SquareGrid
          remainingMinutes={this.state.remainingMinutes}
          remainingSeconds={this.state.remainingSeconds}
        />
        <h1 className={styles.header}>
          Remaining Minutes of the Day
        </h1>
        <blockquote>
          We all have the exact same 1440 minutes per day.
          You don’t get more or less than Mother Teresa, Leonardo Da Vinci,
          Steve Jobs, or Martin Luther King Jr.
          Use it wisely.
        </blockquote>
        <MinutesCounter remainingMinutes={this.state.remainingMinutes} />
      </div>
    );
  }
}

MinutesContainer.displayName = 'MinutesContainer';

export default MinutesContainer;
