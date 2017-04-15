import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import styles from './styles';
import MinutesCounter from '../../components/MinutesCounter';
import SquareGrid from '../../components/SquareGrid';
import Header from '../../components/Header';
import { updateTime } from '../../actions';

class MinutesContainer extends Component {
  componentWillMount() {
    this.props.updateTime();
  }

  componentDidMount() {
    const self = this;
    this.timer = setInterval(() => {
      self.props.updateTime();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div className={styles['minutes-container']}>
        <SquareGrid
          remainingMinutes={this.props.remainingMinutes}
          remainingSeconds={this.props.remainingSeconds}
        />
        <Header text={<FormattedMessage id="app.title" />} />
        <MinutesCounter remainingMinutes={this.props.remainingMinutes} />
      </div>
    );
  }
}

MinutesContainer.displayName = 'MinutesContainer';

function mapStateToProps(state) {
  // console.log('Minutes.state', state); /* eslint no-console: 0 */

  const {
    time: {
      remainingMinutes,
      remainingSeconds,
    },
  } = state;

  return {
    remainingMinutes,
    remainingSeconds,
  };
}

export default connect(mapStateToProps, {
  updateTime,
})(MinutesContainer);
