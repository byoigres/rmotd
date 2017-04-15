import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import styles from './styles';

class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render({ children }) {
    return (
      <div className={styles['scroll-to-top']}>
        {children}
      </div>
    );
  }
}
export default withRouter(ScrollToTop);
