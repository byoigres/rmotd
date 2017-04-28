import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ReactGA from 'react-ga';
import styles from './styles';

ReactGA.initialize('UA-98315944-1');

const logPageView = ({ location }) => {
  console.log('pathname', location.pathname);
  // ReactGA.set({ page: location.pathname });
  // ReactGA.pageview(location.pathname);
};

class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    this.props.history.listen(logPageView);

    return (
      <div className={styles['scroll-to-top']}>
        {this.props.children}
      </div>
    );
  }
}
export default withRouter(ScrollToTop);
