import { h, Component } from 'preact';
import { FormattedMessage } from 'react-intl';
import styles from './styles';
import MinutesCounter from '../../components/MinutesCounter';
import SquareGrid from '../../components/SquareGrid';
import Header from '../../components/Header';

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
        <SquareGrid
          remainingMinutes={state.remainingMinutes}
          remainingSeconds={state.remainingSeconds}
        />
        <Header text={<FormattedMessage id="app.title" />} />
        <MinutesCounter remainingMinutes={this.state.remainingMinutes} />
      </div>
    );
  }
}

MinutesContainer.displayName = 'MinutesContainer';

export default MinutesContainer;